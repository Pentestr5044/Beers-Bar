const express = require("express");
const route = express.Router();
const msgInfo = require("../schemas/messagesSchema");

route.get("/msgGet/:senderId", (req, res) => {
  msgInfo.find(
    { sender: req.params.senderId},
    (err, msgData) => {
      res.status(200).json(msgData);
      if (err) {
        res.status(500);
        console.log(err);
      }
    }
  );
});

route.post("/msgPost",async (req, res) => {
  var msgCreate = new msgInfo(req.body);
  const newMsg = await msgCreate.save();
    try{
      res.status(200).json(newMsg);
    }catch(err){
      res.status(400).send(err);
    }});

module.exports = route;
