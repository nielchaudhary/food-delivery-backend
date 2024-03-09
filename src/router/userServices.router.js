const router = require('express').Router()

//controller imports

const fetchAllRestaurants = require('../controller/userController/fetchrestaurants.controller')
const addRating = require('../controller/userController/addRating.controller')

//middleware imports



//validation imports

const addRatingvalidate = require('../validation/uservalidation/addrating.validate')




router.get('/fetchRestaurants', fetchAllRestaurants)
router.post('/addRating/:restaurantId',addRatingvalidate, addRating)





module.exports = router