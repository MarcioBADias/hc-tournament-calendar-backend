const express = require('express')
const router = express.Router()
const Tournament = require('../models/Tournaments')

router.get('/', async (req, res) => {
    try {
        const tournaments = await Tournament.find()
        res.json(tournaments)
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

router.delete('/', async (req, red) => {
    try {
        const { id } = req.params
        const result = await Tournament.findByIdNadDelete(id)

        if (result) {
            res.status(200).json({ message: 'Torneio deletado com Sucesso!' })
        } else {
            res.status(404).json({ message: 'Torneio ncao encontrado' })
        }
    } catch (error) {
        console.error('Erro ao deletar o torneio: ', error)
        res.status(500).json({ message: 'Erro no servidor.' })
    }
})

module.exports = router