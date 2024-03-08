const restaurant = require('../../model/restaurant.model')

const updateMenu = async (req, res) => {

    const {newItem} = req.body
    const restaurantId = req.params.restaurantId;

    try{

        const existingRestaurant = await restaurant.findById(restaurantId)
        if(!existingRestaurant){
            return res.status(404).send('Restaurant not found')
        }

        existingRestaurant.menu.push(newItem);
        await existingRestaurant.save();
        return res.status(200).json({"Menu updated" : existingRestaurant.menu})



    }catch(error){
        console.log(error)
        return res.status(500).send("Something Went Wrong.")
    }
}

module.exports = updateMenu;