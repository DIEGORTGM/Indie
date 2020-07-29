const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");
const multer = require("multer");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const storage = cloudinaryStorage({
  cloudinary,
  params: {
    folder: "audio",
    allowedFormats: ["mp3"],
    format: "mp3",
    resource_type: "video",
  },
  filename: function (req, res, cb) {
    cb(null, res.originalName);
  },
});

const uploader = multer({ storage });
module.exports = uploader;
