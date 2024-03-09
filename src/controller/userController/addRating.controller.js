const restaurant = require('../../model/restaurant.model');
const { validationResult } = require('express-validator');

const addRating = async (req, res) => {
    const restaurantId = req.params.restaurantId;
    const { rating } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }


    try {
        const existingRestaurant = await restaurant.findById(restaurantId);
        if (!existingRestaurant) {
            return res.status(404).send('Restaurant not found');
        }

        existingRestaurant.rating.push(rating);

        const sum = existingRestaurant.rating.reduce((acc, curr) => acc + curr, 0);
        existingRestaurant.averageRating = sum / existingRestaurant.rating.length;

        await existingRestaurant.save();

        return res.status(201).json({ 'Rating added successfully': rating });
    } catch (error) {
        console.log(error);
        return res.status(500).send("Something Went Wrong.");
    }
};

module.exports = addRating;
