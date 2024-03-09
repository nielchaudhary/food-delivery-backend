const order = require('../../model/orderdetails.model');
const restaurant = require('../../model/restaurant.model')
const { validationResult } = require("express-validator");

const createOrder = async (req, res) => {
    const { restaurantId, items, totalAmount, deliveryAddress, paymentStatus } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        // Create a new order instance
        const newOrder = new order({
            restaurantId,
            items,
            totalAmount,
            deliveryAddress,
            paymentStatus
        });

        const savedOrder = await newOrder.save();
        const foundRestaurant = await restaurant.findById(restaurantId);

        if (!foundRestaurant) {
            return res.status(404).send("Restaurant not found");
        }


        // Push the order ID to the pendingOrders array of the restaurant
        foundRestaurant.pendingOrders.push(savedOrder._id);
        await foundRestaurant.save();

        return res.status(201).json({ "New Order Received": savedOrder });

    } catch (error) {
        console.log(error);
        return res.status(500).send('Something went wrong.');
    }
};

module.exports = createOrder;
