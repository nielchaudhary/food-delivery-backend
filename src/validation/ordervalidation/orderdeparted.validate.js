const { body, param } = require('express-validator');

const orderdepartedValidate = [
    param('orderId')
        .notEmpty().withMessage("Order ID is required")
        .isMongoId().withMessage("Invalid Order ID"),

    body('orderStatus')
        .notEmpty().withMessage("Order status is required")
        .isString().withMessage("Order status must be a string")
        .isIn(['departed', 'delivered']).withMessage("Order status must be 'departed' or 'delivered'")
];

module.exports = orderdepartedValidate;
