const router = require('express').Router()

//controller imports

const fetchAllRestaurants = require('../controller/userController/fetchrestaurants.controller')


//middleware imports



//validation imports




router.get('/fetchRestaurants', fetchAllRestaurants)




module.exports = router