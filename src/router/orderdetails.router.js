const router = require('express').Router()

//controller imports
const createOrderController = require('../controller/ordercontroller/createorder.controller')

const orderDecisionController = require('../controller/ordercontroller/orderDecision.controller')

const orderdepartedController = require('../controller/ordercontroller/orderdeparted.controller')
const orderDeliveredController = require('../controller/ordercontroller/orderdelivered.controller')


//validation imports
const createNewOrderValidate = require('../validation/ordervalidation/createNewOrder.validate')
const orderstatusvalidate = require('../validation/ordervalidation/orderstatus.validate')
const orderdepartedvalidate = require('../validation/ordervalidation/orderdeparted.validate')

router.post('/createNewOrder',createNewOrderValidate, createOrderController)
router.put('/orderDecision/:orderId', orderstatusvalidate, orderDecisionController)
router.post('/orderdeparted/:orderId', orderdepartedvalidate,orderdepartedController)
router.post('/orderdelivered/:orderId', orderDeliveredController)






module.exports = router