const app = require('./app')
const connectDB = require('./src/config/db')
const PORT = process.env.PORT || 5000

connectDB()

app.listen(PORT, () => console.log(`Rodando servidor na poorta ${PORT}`))