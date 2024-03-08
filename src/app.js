const express = require('express')
const app = express();
const dbConnect = require('../src/config/dbConnect')
const restaurantRoutes = require('../src/router/delivery.router')
dbConnect();
app.use(express.json())

app.use('/restaurant', restaurantRoutes)


app.listen(3000, ()=>{
    console.log("Server running on port 3000")
})