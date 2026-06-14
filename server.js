const express = require('express')
const app = express()
app.use(express.json())
const todoRoutes = require('./routes/todo.routes')
app.use(todoRoutes)

app.listen(4040, () => {
    console.log('Server is running on port 4040')
})