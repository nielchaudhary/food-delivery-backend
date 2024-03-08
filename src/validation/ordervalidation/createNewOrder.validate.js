const { body } = require('express-validator');

const createOrderValidate = [
    body('restaurantId')
        .notEmpty().withMessage("Restaurant ID is required")
        .isMongoId().withMessage("Invalid Restaurant ID"),

    body('items')
        .isArray().withMessage("Items must be an array")
        .notEmpty().withMessage("Items array cannot be empty"),

    body('totalAmount')
        .notEmpty().withMessage("Total amount is required")
        .isInt().withMessage("Total amount must be a number"),

    body('deliveryAddress').isString()
        .notEmpty().withMessage("Delivery address is required"),

    body('paymentStatus')
        .notEmpty().withMessage("Payment status is required")
        .isIn(['pending', 'paid']).withMessage("Payment status must be 'pending' or 'paid'")
];

module.exports = createOrderValidate;
