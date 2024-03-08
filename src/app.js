const express = require('express')
const app = express();
const dbConnect = require('../src/config/dbConnect')
dbConnect();


app.listen(3000, ()=>{
    console.log("Server running on port 3000")
})