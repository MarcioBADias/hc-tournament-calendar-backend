const express = require('express')
const router = express.Router()
const Tournament = require('../models/Tournaments')

router.get('/', async (rec, res) => {
    try {
        const tournament = await Tournament.find()
        res.json(tournament)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.post('/', async (req, res) => {
    const { name, date, location, league } = req.body

    const newTournament = new Tournament({
        name, date, location, league
    })

    try{
        const savedTournament = await newTournament.save()
        res.status(201).json(savedTournament)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

module.exports = router