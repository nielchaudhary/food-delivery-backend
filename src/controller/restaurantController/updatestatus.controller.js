const Restaurant = require('../../model/restaurant.model');

const updateStatus = async (req, res) => {
    const restaurantId = req.params.restaurantId;
    const { status } = req.body;

    try {
        const existingRestaurant = await Restaurant.findById(restaurantId);
        if (!existingRestaurant) {
            return res.status(404).send("Restaurant not found");
        }

        // Update only the status field
        existingRestaurant.status = status;

        // Save the updated restaurant
        await existingRestaurant.save();

        return res.status(200).json({ "Status Updated": status });
    } catch (error) {
        console.log(error);
        return res.status(500).send("Something Went Wrong");
    }
};

module.exports = updateStatus;
