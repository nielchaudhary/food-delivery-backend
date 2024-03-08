const router = require('express').Router();

// Controller imports
const createNewAgentController = require('../controller/deliveryAgentcontroller/createNewAgent.controller');

// Middleware imports
// Validation imports

router.post('/createNewAgent', createNewAgentController);

module.exports = router;
