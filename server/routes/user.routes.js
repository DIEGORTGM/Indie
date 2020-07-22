const express = require('express')
const router = express.Router()

const Artist = require('../models/User.model')

// Endpoints
router.get('/getAllArtists', (req, res, next) => {

    Artist.find()
        .then(allArtists => res.json(allArtists))
        .catch(err => next(err))
})


router.get('/getOneArtist/:id', (req, res, next) => {

    Artist.findById(req.params.id)
        .then(oneArtist => res.json(oneArtist))
        .catch(err => next(err))
})

router.post('/edit/:id', (req, res, next) => {
    const { name, username, password, occupation, description, imageUrl, contactInfo, pastWork, favorites} = req.body
    Artist.findByIdAndUpdate(req.params.id, { name, username, password, occupation, description, imageUrl, contactInfo, pastWork, favorites})
        .then(editArtist => res.json(editArtist))
        .catch(err => next(new Error(err)))
})

module.exports = router