const express = require("express");
const route = express.Router();
const beerGift = require("../schemas/GiftedBeer");

//post to create
route.post("/beersGift", async (req, res) => {
  const newGift = new beerGift(req.body);
  const createGift = await newGift.save();
  try {
    res.status(200).json(createGift);
  } catch (err) {
    res.status(500);
    console.log(err);
  }
});

//get to display
route.get("/beersGift/:uName", async (req, res) => {
  const searchGifts = await beerGift.find({ $in:req.params.uName});
  try {
    res.status(200).json(searchGifts);
  } catch (err) {
    res.status(500);
    console.log(err);
  }
});

module.exports = route;
