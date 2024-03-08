const mongoose = require('mongoose')
const {Schema, Types} = mongoose


const restaurantSchema = new Schema({
    name : {
        type : String,
        required : true,

    },
    location : {
        type: String,
        required: true,

    },
    menu: {
        type: Object,
        required: true,
    },
    contact  : {
        type: String,
        required : true,

    },

    rating : {
        type : String,
        default : '',
    },
    status : {
        type: String,
        required : true,
    }

});




const restaurantInfo = mongoose.model('restaurantInfo', restaurantSchema);

module.exports = restaurantInfo;