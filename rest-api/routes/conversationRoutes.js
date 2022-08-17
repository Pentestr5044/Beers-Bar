const express = require("express");
const route = express.Router();
const convoModal = require("../schemas/conversationsSchema");

//make new convo
route.post("/convo", async (req,res) => {
    var newConvo = new convoModal({
        party:[req.body.sender, req.body.receiver]
    });
    try{
        var newConvoStarted = await newConvo.save();
        res.status(200).json(newConvoStarted);
    }catch(err){
        res.status(500).json(err);

    }

})

//get convos from user
route.get("/convo/:senderId", async (req,res)=>{
    const getConvos =  await convoModal.find({ 
        party: { $in : [req.params.senderId]}, 
    });
    try{
        res.status(200).json(getConvos);
    }
    catch(err){
        res.status(500);
        console.log(err)
    }
})
module.exports = route;