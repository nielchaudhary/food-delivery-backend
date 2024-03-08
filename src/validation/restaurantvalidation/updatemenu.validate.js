const { body, param } = require('express-validator');

const updateMenuValidate = [
    param('restaurantId')
        .notEmpty().withMessage("Restaurant ID is required")
        .isMongoId().withMessage("Invalid Restaurant ID"),
    body('newItem')
        .notEmpty().withMessage("New item is required")
        .isObject().withMessage("New item must be an object")
        .custom((value, { req }) => {
            if (!value.itemName || !value.price) {
                throw new Error("New item must have itemName and price properties");
            }
            return true;
        })
];

module.exports = updateMenuValidate;
