const express = require('express')
const app = express();
const dbConnect = require('../src/config/dbConnect')
const restaurantRoutes = require('./router/restaurantServices.router')
const userRoutes = require('./router/userServices.router')
dbConnect();
app.use(express.json())

app.use('/restaurant', restaurantRoutes)
app.use('/user',userRoutes )


app.listen(3000, ()=>{
    console.log("Server running on port 3000")
})