const express = require('express')
const router = express.Router()

const Artist = require('../models/User.model')
const User = require('../models/User.model')

// Endpoints
router.get('/getAllArtists', (req, res, next) => {

    Artist.find()
        .then(allArtists => res.json(allArtists))
        .catch(err => next(err))
})


router.get('/getOneArtist/:artist_id', (req, res, next) => {

    User.findById(req.params.coaster_id)
        .then(oneArtist => res.json(oneArtist))
        .catch(err => next(err))
})

router.post('/edit', (req, res, next) => {
    const { name, username, password, occupation, description, imageUrl, contactInfo, pastWork, favorites} = req.body
    Coaster.findByIdAndUpdate(req.query.id, { name, username, password, occupation, description, imageUrl, contactInfo, pastWork, favorites})
        .then(editArtist => res.json(editArtist))
        .catch(err => next(new Error(err)))
})

module.exports = router