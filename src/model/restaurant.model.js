const mongoose = require('mongoose');
const { Schema } = mongoose;

const menuItemSchema = new Schema({
    itemName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

const restaurantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    menu: {
        type: [menuItemSchema],
        required: true
    },
    contact: {
        type: String,
        required: true
    },

    status: {
        type: String,
        required: true
    },
    rating : {
        type : [Number]

    },
    averageRating : {
        type : Number,
    }
});

const RestaurantInfo = mongoose.model('RestaurantInfo', restaurantSchema);

module.exports = RestaurantInfo;
