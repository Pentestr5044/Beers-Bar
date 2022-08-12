import mongoose from "mongoose";

const { Schema } = mongoose;

const profileSchema = new Schema({
  imgPath: {
    type: String,
  },
  aboutMe: {
    type: String,
    limit: 500
  },
  interests: {
    type: String,
    limit: 300
  },
});
module.exports = mongoose.model("profile", profileSchema);
