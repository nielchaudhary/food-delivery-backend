const { body } = require('express-validator');

const updateStatusValidate = [

    body('status')
        .notEmpty().withMessage("status is required")
        .isString().withMessage("status must be a string"),
];

module.exports = updateStatusValidate;
