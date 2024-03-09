const Order = require('../../model/orderdetails.model');
const deliveryAgent = require('../../model/deliveryAgent.model')

const {validationResult} = require("express-validator");

const orderStatus = async (req, res) => {
    const orderId = req.params.orderId;
    const orderDecision = req.body.status;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }


    try {
        // Find the order by ID
        const existingOrder = await Order.findById(orderId);

        if (!existingOrder) {
            return res.status(404).send('Order not found.');
        }

        // Update the status of the order
        existingOrder.status = orderDecision;


        if(orderDecision == "accepted"){
            const unoccupiedDeliveryAgent = await deliveryAgent.findOne({ availability: 'UnOccupied' });

            if (!unoccupiedDeliveryAgent) {
                return res.status(404).send("No available delivery agent");
            }



            // Assign the delivery agent to the order
            existingOrder.deliveryAgentId = unoccupiedDeliveryAgent._id;
            await existingOrder.save();

            // Update the delivery agent status to 'Occupied'
            unoccupiedDeliveryAgent.availability = 'Occupied';
            unoccupiedDeliveryAgent.orderStatus = "accepted";

            await unoccupiedDeliveryAgent.save();

        }





        // Save the updated order
        await existingOrder.save();

        return res.status(200).json({ 'Order Status': orderDecision });
    } catch (error) {
        console.log(error);
        return res.status(500).send('Something went wrong');
    }
};

module.exports = orderStatus;
