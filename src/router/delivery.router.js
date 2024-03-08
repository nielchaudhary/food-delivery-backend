const router = require('express').Router()

//controller imports

const addRestaurant = require('../controller/restaurantController/addRestaurant.controller')


//middleware imports



//validation imports
const addRestaurantValidate = require('../validation/addRestaurant.validate')




router.post('/addRestaurant',addRestaurantValidate, addRestaurant)



module.exports = router