const { body } = require('express-validator');

const createNewAgentValidate = [
    body('name')
        .notEmpty().withMessage("Name is required"),

];

module.exports = createNewAgentValidate;
