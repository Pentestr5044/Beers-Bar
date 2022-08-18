const mongoose = require('mongoose');

const { Schema } = mongoose;

const beerSchema = new Schema({
  bName:{
    type: String,
    req: true
  },
  bPrice: {
    type: Number,
    req: true
  },
  bDesc: {
    type: String
  }
});
module.exports = mongoose.model("beers", beerSchema);
