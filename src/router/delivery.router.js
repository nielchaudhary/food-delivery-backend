const router = require('express').Router()

//controller imports

const addRestaurant = require('../controller/restaurantController/addRestaurant.controller')
const updateRestaurantStatus = require('../controller/restaurantController/updatestatus.controller')


//middleware imports



//validation imports
const addRestaurantValidate = require('../validation/addRestaurant.validate')




router.post('/addRestaurant',addRestaurantValidate, addRestaurant)
router.put('/updateRestaurantStatus/:restaurantId',updateRestaurantStatus)



module.exports = router