const Restaurant = require('../../model/restaurant.model');

const fetchRestaurants = async (req, res) => {
    try {
        // Find all restaurants with status "online"
        const restaurants = await Restaurant.find({ status: "online" });

        return res.status(200).json(restaurants);
    } catch (error) {
        console.log(error);
        return res.status(500).send('Something Went Wrong.');
    }
}

module.exports = fetchRestaurants;
