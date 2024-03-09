const router = require('express').Router()

//controller imports
const createOrderController = require('../controller/ordercontroller/createorder.controller')

const orderDecisionController = require('../controller/ordercontroller/orderStatus.controller')


//validation imports
const createNewOrderValidate = require('../validation/ordervalidation/createNewOrder.validate')

const orderstatusvalidate = require('../validation/ordervalidation/orderstatus.validate')

router.post('/createNewOrder',createNewOrderValidate, createOrderController)
router.put('/orderDecision/:orderId', orderstatusvalidate, orderDecisionController)





module.exports = router