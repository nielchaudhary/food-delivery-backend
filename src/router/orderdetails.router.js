const router = require('express').Router()

//controller imports

const createOrderController = require('../controller/ordercontroller/createorder.controller')

//middleware imports



//validation imports

router.post('/createNewOrder', createOrderController)





module.exports = router