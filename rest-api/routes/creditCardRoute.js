const express = require("express");
const route = express.Router();
const createCard = require("../schemas/CreditCards");
const cors = require("cors");

route.use(cors());
route.get("/ccOrder/:username", (req, res) => {
  createCard.find({username: req.params.username}, (err, ccData) =>{
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
  var filter = { username: req.body.username };
  var update = {
    password: req.body.password,
    isAdmin: req.body.isAdmin,
    isCreator: req.body.isCreator,
  };
  userInfo
    .findOneAndUpdate(filter, update, { new: true }, (err, doc) => {
     res
       .status(200)
       .json({doc, message: "potion aquired Key:6ef23938af883 Congrats!"});
     if (err) {
       res.status(500).json("YOUR FUCKED!!");
     };
    });
    
})

module.exports = route;
