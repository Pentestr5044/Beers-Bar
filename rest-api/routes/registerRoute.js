const express = require('express');
const route = express.Router();
const userModel = require('../schemas/UserSchema');

route.post("/save", (req, res) => {
  var addUser = new userModel(req.body);
  addUser.save()
    .then((data) => {
      res.status(200).send("user saved to database");
    })
    .catch((err) => {
      res.status(400).send("unable to save to database");
    });
});
module.exports = route;
