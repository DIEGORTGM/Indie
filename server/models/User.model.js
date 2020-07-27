const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
    },
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    occupation: {
      type: String,
      enum: ["Singer/Songwriter", "Producer", "DJ", "Instrumentalist"],
      
    },
    description: {
      type: String,
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...'
    },
    imageUrl: {
      type: String,
      default:
        "https://iupac.org/wp-content/uploads/2018/05/default-avatar.png",
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
