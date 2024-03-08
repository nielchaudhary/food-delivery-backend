const order = require('../../model/orderdetails.model');

const createOrder = async (req, res) => {
    const { restaurantId, items, totalAmount, deliveryAddress, paymentStatus } = req.body;

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

        return res.status(201).json({"New Order Received" : savedOrder});
    } catch (error) {
        console.log(error);
        return res.status(500).send('Something went wrong.');
    }
};

module.exports = createOrder;
