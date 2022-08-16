const mongoose = require('mongoose');

const { Schema } = mongoose;

const messagesSchema = new Schema({
  __id: {
    type: Date,
    unique: true,
    required: true,
    default: Date.now,
  },
  sender: {
    type: Schema.Types.Mixed
  },
  receiver: {
    type: Schema.Types.Mixed
  },
  message: {
    type: Schema.Types.Mixed
  },
});
module.exports = mongoose.model("messages", messagesSchema);
