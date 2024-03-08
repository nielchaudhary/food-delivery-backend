const Restaurant = require('../../model/restaurant.model');

const updatePricing = async (req, res) => {
    const id = req.params.id;
    const { itemName, newPrice } = req.body;

    try {
        // Find the restaurant by ID
        const restaurant = await Restaurant.findById(id);

        if (!restaurant) {
            return res.status(404).send('Restaurant not found');
        }

        // Find the index of the item in the menu array
        const menuItemIndex = restaurant.menu.findIndex(item => item.itemName === itemName);

        if (menuItemIndex === -1) {
            return res.status(404).send('Menu item not found');
        }

        // Update the price of the item
        restaurant.menu[menuItemIndex].price = newPrice;

        // Save the updated restaurant
        await restaurant.save();

        res.json(restaurant);
    } catch (error) {
        console.log(error);
        return res.status(500).send('Something went wrong.');
    }
};

module.exports = updatePricing;
