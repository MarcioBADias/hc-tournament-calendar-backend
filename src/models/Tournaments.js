const mongoose = require('mongoose')

const tournamentSchema = mongoose.Schema({
    name: { type: String, require: true },
    date: { type: Date, require:true },
    location: { type: String, require: true },
    league: { type: String, require: true }
})

const Tournament = mongoose.model('Tournament', tournamentSchema)

module.exports = Tournament