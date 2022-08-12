const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
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
  password: {
    type: String,
    req: true,
  },
  fName: {
    type: String,
  },
  lName: {
    type: String,
  },
  isAdmin: {
    type: Number,
    req: true,
    default: 4,
  },
  isCreator: {
    type: Number,
    req: true,
    default: 0,
  },
  rDate: {
    type: Date,
    req: true,
    hidden: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("users", userSchema);