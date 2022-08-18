const express = require("express");
const route = express.Router();
const beerInfo = require("../schemas/beerSchema");


//post to create
route.post("/beers", async (req,res)=>{
    const newBeer = new beerInfo(req.body);
    const createBeer = await newBeer.save();
    try{
        res.status(200).json(createBeer);
    }catch(err){
        res.status(500);
        console.log(err);
    }
})

//get to display
route.get("/beers", async (req,res)=>{
    const searchBeer = await beerInfo.find();
    try{
        res.status(200).json(searchBeer);
    }catch(err){
        res.status(500);
        console.log(err);
    }
})


module.exports = route;