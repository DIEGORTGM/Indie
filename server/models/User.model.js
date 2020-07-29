const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    occupation: {
      type: String,
      enum: ["Singer/Songwriter", "Producer", "DJ", "Instrumentalist"],
    },
    description: {
      type: String,
      default: "...",
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
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    video: {
      type: String,
    },
    videoName: {
      type: String,
    },
    carPicture: {
      type: [String],
    },
    audioFile: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
