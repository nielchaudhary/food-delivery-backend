const Order = require('../../model/orderdetails.model');
const {validationResult} = require("express-validator");

const acceptOrder = async (req, res) => {
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

        // Save the updated order
        await existingOrder.save();

        return res.status(200).json({ 'Order Status': orderDecision });
    } catch (error) {
        console.log(error);
        return res.status(500).send('Something went wrong');
    }
};

module.exports = acceptOrder;
