const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({

    restaurantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'RestaurantInfo',
        required: true
    },
    items: [{
        itemName : String,
        quantity: Number,
        price: Number
    }],
    totalAmount: {
        type: Number,
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'rejected', 'delivered'],
        default: 'pending'
    },
    deliveryAgentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DeliveryAgent'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    deliveryAddress : {
        type: String,
        required : true,
    },
    paymentStatus: {
        type: String,
        enum: ['pending', 'paid'],
        default: 'pending'
    }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
