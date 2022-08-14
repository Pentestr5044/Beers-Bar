const mongoose = require('mongoose');

const { Schema } = mongoose;

const cardSchema = new Schema({
  username: {
    type: String,
    req: true,
    unique: true,
  },
  email: {
    type: email,
    unique: true,
    req: true,
  },
  ccNumber: {
    type: String,
    req: true,
  },
  fName: {
    type: String,
    req: true,
  },
  lName: {
    type: String,
    req: true,
  },
});
module.exports = mongoose.model("cards", cardSchema);
