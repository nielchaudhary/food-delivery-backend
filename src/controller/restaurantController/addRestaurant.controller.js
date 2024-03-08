const restaurantInfo = require('../../model/restaurant.model')
const {validationResult} = require("express-validator");

const addRestaurant = async (req, res) => {
    const {name, location, menu, contact, status} = req.body

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }


    try {

        const existingRestaurant = await restaurantInfo.findOne({name})
        if (existingRestaurant) {
            return res.status(400).send("Restaurant already exists")
        }

        const newRestaurant = new restaurantInfo({name, location, menu, contact, status})

        await newRestaurant.save()
        return res.status(200).json({"New Restaurant Added": newRestaurant})


    } catch (error) {
        console.log(error)
        return res.status(500).send("Something went wrong")
    }

}

module.exports = addRestaurant