const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
    },
    username: {
      type: String,
    },
    password: {
      type: String,
    },
    occupation: {
      type: String,
      enum: ["Singer/Songwriter", "Producer", "DJ", "Instrumentalist"],
    },
    description: {
      type: String,
    },
    imageUrl: {
      type: String,
      default:
        "https://www.pikpng.com/pngl/m/80-805523_default-avatar-svg-png-icon-free-download-264157.png",
    },
    contactInfo: {
      type: [String],
    },
    pastWork: {
      type: [String],
    },
    favorites: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("user", UserSchema);
module.exports = User;
