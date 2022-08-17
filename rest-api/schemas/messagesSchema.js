const mongoose = require('mongoose');

const { Schema } = mongoose;

const messagesSchema = new Schema({
  convoId: {
    type: String
  },
  senderId:{
    type: String
  },
  message: {
    type: String
  },
},{timestamps: true});
module.exports = mongoose.model("messages", messagesSchema);
