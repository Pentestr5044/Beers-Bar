const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoute = require('./routes/userRoute');
const profileRoute = require('./routes/profileRoute')
const app = express();
const port = 8888;
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (mongoose.connect(process.env.MONGO_URL)){
  console.log('MONGO DB CONNECTED!!!!!')
};

app.use('/api', userRoute, profileRoute)

app.listen(port, () =>{
    console.log("connected on port 8888.....running!")
})
