const { body, param } = require('express-validator');

const updatePricingValidate = [
    param('id')
        .notEmpty().withMessage("Restaurant ID is required")
        .isMongoId().withMessage("Invalid Restaurant ID"),
    body('itemName')
        .notEmpty().withMessage("Item name is required"),
    body('newPrice')
        .notEmpty().withMessage("New price is required")
        .isNumeric().withMessage("New price must be a number")
];

module.exports = updatePricingValidate;
