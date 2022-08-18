const mongoose = require('mongoose');

const { Schema } = mongoose;

const giftSchema = new Schema({
  gifting: {
    type: Array
  },
  giftNotification: {
    type: String
  }
});
module.exports = mongoose.model("gifts", giftSchema);
