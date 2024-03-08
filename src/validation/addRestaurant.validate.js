const { body } = require('express-validator');

const addRestaurantvalidate = [
    body('name')
        .notEmpty().withMessage("name is required")
        .isString().withMessage("name must be a string"),
    body('location')
        .notEmpty().withMessage("location is required")
        .isString().withMessage("location must be a string"),
    body('rating')
        .notEmpty().withMessage("rating is required")
        .isString().withMessage("rating must be a string"),
    body('contact')
        .notEmpty().withMessage("contact is required")
        .isString().withMessage("contact must be a string"),
    body('status')
        .notEmpty().withMessage("status is required")
        .isString().withMessage("status must be a string"),
    body('menu')
        .notEmpty().withMessage("menu is required")
        .isObject().withMessage("menu must be an object"),
];

module.exports = addRestaurantvalidate;
