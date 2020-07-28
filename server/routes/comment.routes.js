const express = require("express");
const router = express.Router();

const Comment = require("../models/Comment.model");

router.get("/getAllComments", (req, res, next) => {
  Comment.find()
    .then((getAllComments) => res.json(getAllComments))
    .catch((err) => next(err));
});

router.post("/createComment", (req, res, next) => {
  console.log(req.body);
  const text = req.body.text;
  const owner = req.body.loggedInUser._id;

  Comment.create({
    owner,
    text,
  })
    .then((createComment) => res.json(createComment))
    .catch((err) => next(new Error(err)));
});

module.exports = router;
