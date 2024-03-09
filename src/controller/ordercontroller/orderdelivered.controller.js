const orderModel = require('../../model/orderdetails.model');
const deliveryAgentModel = require('../../model/deliveryAgent.model');
const restaurantModel = require('../../model/restaurant.model');
const { validationResult } = require("express-validator");

const orderDelivered = async (req, res) => {
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

        const restaurant = await restaurantModel.findById(order.restaurantId);

        if(order.paymentStatus === "pending"){
            order.paymentStatus = "paid"
        }
        order.status = "delivered";

        await order.save();



        // Remove the order from the pendingOrders array of the restaurant
        const index = restaurant.pendingOrders.indexOf(orderId);
        if (index !== -1) {
            restaurant.pendingOrders.splice(index, 1);
        }

        // Save the changes to the restaurant
        await restaurant.save();


        assignedDeliveryAgent.orderStatus = orderStatus;
        assignedDeliveryAgent.availability = "unoccupied";
        await assignedDeliveryAgent.save();

        return res.status(200).json({ "Updated OrderStatus": orderStatus });

    } catch (error) {
        console.log(error);
        return res.status(500).send('Something Went Wrong.');
    }
};

module.exports = orderDelivered
