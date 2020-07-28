const express = require("express");
const router = express.Router();

const Artist = require("../models/User.model");

// Endpoints
router.get("/getAllArtists", (req, res, next) => {
  Artist.find()
    .then((allArtists) => res.json(allArtists))
    .catch((err) => next(err));
});

router.get("/getOneArtist/:id", (req, res, next) => {
  Artist.findById(req.params.id)
    .populate("comments")
    .then((oneArtist) => res.json(oneArtist))
    .catch((err) => next(err));
});

router.put("/edit/:id", (req, res, next) => {
  // console.log(id, req.body)
  const { username, occupation, description, contactInfo } = req.body;

  Artist.findByIdAndUpdate(req.params.id, {
    username,
    occupation,
    description,
    contactInfo,
  })
    .then((editArtist) => res.json(editArtist))
    .catch((err) => next(new Error(err)));
});

router.post("/search", (req, res, next) => {
  const { searchTerm } = req.body;
  const regex = new RegExp(escapeRegex(searchTerm), "gi");
  Artist.find({
    username: regex,
  })
    .then((allArtists) => res.json(allArtists))
    .catch((err) => next(err));
});

function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

router.put("/addComment/:id", (req, res, next) => {
  console.log(req.body);
  const { _id } = req.body;
  console.log(_id);
  Artist.findByIdAndUpdate({ _id: req.params.id }, { $push: { comments: _id } })
    .then((updatedArtistComments) => res.json(updatedArtistComments))
    .catch((err) => next(new Error(err)));
});

module.exports = router;
