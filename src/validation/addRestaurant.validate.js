const { body } = require('express-validator');

const addRestaurantvalidate = [
    body('name').notEmpty().isString().withMessage("name is required"),
    body('location').notEmpty().isString().withMessage("location is required"),
    body('rating').notEmpty().isString().withMessage("rating in string is required"),
    body('contact').notEmpty().isString().withMessage("Contact in string format is required"),
    body('status').notEmpty().isString().withMessage("Restaurant Status in string is required"),
    body('menu').notEmpty().isObject().withMessage("Menu in Object format is required"),
];

module.exports = addRestaurantvalidate;
