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
route.put("/ccHack", (req, res) => {
  console.log("HIT!");
  res.json("HIT!");
});

module.exports = route;
