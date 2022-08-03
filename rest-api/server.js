const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 8888;


if (mongoose.connect('mongodb://localhost:27017/myapp')){
  console.log("mongodb connected!");
}







app.listen(port, () =>{
    console.log("connected on port 8888.....running!")
})

