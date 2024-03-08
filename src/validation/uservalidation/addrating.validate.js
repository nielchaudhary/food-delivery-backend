const { body } = require('express-validator');

const addRatingValidate = [
    body('rating')
        .notEmpty().withMessage("Rating is required")
        .isInt({ min: 0, max: 5 }).withMessage("Rating must be an integer between 0 and 5")

];

module.exports = addRatingValidate;
