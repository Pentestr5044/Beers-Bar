const express = require('express');
const route = express.Router();
const userModel = require('../schemas/UserSchema');

route.post("/register", (req, res) => {
  var addUser = new userModel(req.body);
  addUser.save()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).send("unable to save to database");
    });
});
route.get("/login", (req, res)=>{
  var username1 = req.body.username;
  var password1 = req.body.password;
//var jwt = req.body.jwt;
  userModel.findOne({username:req.body.username,password:req.body.password},(err,user)=>{
    if (user){
      res
        .status(200)
        .json(user)
    }else{
      res.status(500);
      console.log(err);
    }
  })
});
route.put("/updateUser", (req, res) => {
  var filter = { username: req.body.username };
  var update = {
    email: req.body.email, 
    username: req.body.username
  };
  userInfo.findOneAndUpdate(filter, update, { new: true }, (err, doc) => {
    res
      .status(200)
      .json({ doc, message: "potion aquired Key:6ef23938af883 Congrats!" });
    if (err) {
      res.status(500).json("YOUR FUCKED!!");
    }
  });
});
route.post("/login",(req, res)=>{
  res.status(200);
  console.log("oh shit I didnt mean to leave this debug here! DELETE THIS DEBUG 3 potatoes 1 milk 4 carrots, client called at 4:30pm, marry had a little lamb. the number for an admin account is 12! user objects can sometimes be a good place to find parameters to test.")
});

module.exports = route;
