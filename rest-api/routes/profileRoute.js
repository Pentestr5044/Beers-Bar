const express = require("express");
const route = express.Router();
const createProfile = require('../schemas/profileSchema');
const cors = require("cors");

route.use(cors());

route.get('/profile/:username', (req, res)=>{
    createProfile.find({username: req.params.username},(err, pfData)=>{
        res.status(200).json(pfData);
        if (err){
            res.status(500);
            console.log(err)
        }
    })
});
route.post("/profile", (req, res) => {
  var addProfile = new createProfile(req.body);
  addProfile.save()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).send("unable to save to database");
    });
});
route.put("/profile", (req, res) => {
  console.log("HIT!");
  res.json("HIT!");
});

module.exports = route;