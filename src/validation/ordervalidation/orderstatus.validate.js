const { body, param} = require('express-validator');

const acceptOrderValidate = [
    param('orderId')
        .notEmpty().withMessage("Order ID is required")
        .isMongoId().withMessage("Invalid Order ID"),
    body('decision')
        .notEmpty().withMessage("Status is required")
        .isIn(['pending', 'accepted', 'rejected', 'completed']).withMessage("Invalid status")
];

module.exports = acceptOrderValidate;
