require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())
const todoRoutes = require('./routes/todo.routes')
app.use(todoRoutes)

const PORT = process.env.PORT || 4040

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})