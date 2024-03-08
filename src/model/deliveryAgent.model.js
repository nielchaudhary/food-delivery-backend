const mongoose = require('mongoose');
const { Schema } = mongoose;



const deliveryAgentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    availability : {
        type: String,
        required: true
    },

});

const deliveryAgentInfo = mongoose.model('deliveryAgentInfo', deliveryAgentSchema);

module.exports = deliveryAgentInfo;
