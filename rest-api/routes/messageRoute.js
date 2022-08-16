const express = require("express");
const route = express.Router();
const createCard = require("../schemas/CreditCards");
const msgInfo = require("../schemas/messagesSchema");

route.get("/msgGet", (req, res) => {
  msgInfo.find(
    { sender: req.body.sender},
    (err, msgData) => {
      res.status(200).json(msgData);
      if (err) {
        res.status(500);
        console.log(err);
      }
    }
  );
});
route.post("/msgPost", (req, res) => {
  var msgCreate = new msgInfo(req.body);
  msgCreate.save()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

module.exports = route;
