const router = require('express').Router();

// Controller imports
const createNewAgentController = require('../controller/deliveryAgentcontroller/createNewAgent.controller');


// Validation imports
const newAgentValidate = require('../validation/agentvalidation/createNewAgent.validate')

router.post('/createNewAgent', newAgentValidate, createNewAgentController);

module.exports = router;
