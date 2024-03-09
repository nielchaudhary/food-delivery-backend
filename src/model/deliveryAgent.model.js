const mongoose = require('mongoose');
const { Schema } = mongoose;



const deliveryAgentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    availability : {
        type: String,
        default : 'unoccupied',
    },
    orderStatus: {
        type: String,
        enum: ['accepted', 'departed', 'delivered'],
    },


});

const deliveryAgent = mongoose.model('deliveryAgent', deliveryAgentSchema);

module.exports = deliveryAgent;
