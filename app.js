const express = require('express')
const connectDB = require('./src/config/db')
const tournamentRoutes = require('./src/routes/tournamentRoutes')
const cors = require('cors')
const PORT = process.env.PORT || 5000
const app = express()

connectDB()

app.use(cors())
app.use(express.json())
app.use('/api/tournaments', tournamentRoutes)


app.listen(PORT, () => console.log(`Rodando servidor na poorta ${PORT}`))