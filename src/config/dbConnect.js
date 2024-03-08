const mongoose = require('mongoose');


const dbConnect = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/food-delivery');
        console.log('Database connected');
    } catch (error) {
        console.error(error);
    }
};

module.exports = dbConnect;