const router = require('express').Router()

//controller imports

const addRestaurant = require('../controller/restaurantController/addRestaurant.controller')
const updateRestaurantStatus = require('../controller/restaurantController/updatestatus.controller')

const updateRestaurantMenu = require('../controller/restaurantController/updateMenu.controller')

const updatePricing = require('../controller/restaurantController/updatePricing.controller')


//middleware imports



//validation imports
const addRestaurantValidate = require('../validation/restaurantvalidation/addRestaurant.validate')
const updateStatusValidate = require('../validation/restaurantvalidation/updatestatus.validate')

const updateMenuValidate = require('../validation/restaurantvalidation/updatemenu.validate')


router.post('/addRestaurant',addRestaurantValidate, addRestaurant)
router.put('/updateRestaurantStatus/:restaurantId',updateStatusValidate,updateRestaurantStatus)
router.put('/updateRestaurantMenu/:restaurantId',updateMenuValidate,updateRestaurantMenu)
router.put('/updatePricing/:id', updatePricing)




module.exports = router