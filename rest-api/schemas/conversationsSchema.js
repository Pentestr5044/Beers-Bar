const mongoose = require("mongoose");

const { Schema } = mongoose;

const conversationSchema = new Schema({
  party:{
    type: Array
  },
  
},{timestamps: true});
module.exports = mongoose.model("conversations", conversationSchema);
