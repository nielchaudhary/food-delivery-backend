const router = require('express').Router()

//controller imports

const addRestaurant = require('../controller/restaurantController/addRestaurant.controller')


//middleware imports



//validation imports





router.post('/addRestaurant', addRestaurant)



module.exports = router