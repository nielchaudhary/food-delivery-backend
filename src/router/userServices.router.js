const router = require('express').Router()

//controller imports

const fetchAllRestaurants = require('../controller/userController/fetchrestaurants.controller')
const addRating = require('../controller/userController/addRating.controller')

//middleware imports



//validation imports




router.get('/fetchRestaurants', fetchAllRestaurants)
router.post('/addRating/:restaurantId', addRating)





module.exports = router