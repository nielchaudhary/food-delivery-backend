const orderModel = require('../../model/orderdetails.model');
const deliveryAgentModel = require('../../model/deliveryAgent.model');
const {validationResult} = require("express-validator");

const orderOnTheWay = async (req, res) => {
    const orderId = req.params.orderId;
    const orderStatus = req.body.orderStatus;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const order = await orderModel.findById(orderId);
        if (!order) {
            return res.status(404).send('Order not found');
        }

        const assignedDeliveryAgent = await deliveryAgentModel.findById(order.deliveryAgentId);
        if (!assignedDeliveryAgent) {
            return res.status(404).send('Assigned delivery agent not found');
        }


        assignedDeliveryAgent.orderStatus = orderStatus;
        await assignedDeliveryAgent.save();

        return res.status(200).json({ "Updated OrderStatus": orderStatus });

    } catch (error) {
        console.log(error);
        return res.status(500).send('Something Went Wrong.');
    }
};

module.exports = orderOnTheWay;
