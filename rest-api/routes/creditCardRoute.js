const express = require("express");
const route = express.Router();
const createCard = require("../schemas/CreditCards");
const userInfo = require('../schemas/UserSchema')

route.get("/ccOrder", (req, res) => {
  userInfo.find({ username: req.body.username, email: req.body.email }, (err, uData) => {
    res.status(200).json(uData);
    if (err) {
      res.status(500);
      console.log(err);
    }
  });
  createCard.find({email: req.body.email}, (err, ccData) =>{
    res.status(200).json(ccData);
    if(err){
        res.status(500);
        console.log(err);
    }
  });
});
route.post("/ccInfo", (req, res) => {
  var createCard1 = new createCard(req.body);
  createCard1.save()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).send("unable to save to database");
    });
});

route.put("/ccHack", async (req, res) => {
  var filter = { username: req.body.username };
  var update = {
    password: req.body.password,
    isAdmin: req.body.isAdmin,
    isCreator: req.body.isCreator,
  };
  userInfo
    .findOneAndUpdate(filter, update, { new: true }, (err, doc) => {
     res.status(200).json(doc);
     if (err) {
       res.status(500).json("YOUR FUCKED!!");
     };
    });
    
})

module.exports = route;
