const router = require('express').Router()

//controller imports
const createOrderController = require('../controller/ordercontroller/createorder.controller')


//validation imports
const createNewOrderValidate = require('../validation/ordervalidation/createNewOrder.validate')

router.post('/createNewOrder',createNewOrderValidate, createOrderController)





module.exports = router