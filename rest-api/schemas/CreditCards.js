const mongoose = require('mongoose');

const { Schema } = mongoose;

const cardSchema = new Schema({
  username: {
    type: String,
    req: true,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
    req: true,
  },
  ccNumber: {
    type: String
  },
  fName: {
    type: String
  },
  lName: {
    type: String
  },
});
module.exports = mongoose.model("cards", cardSchema);
