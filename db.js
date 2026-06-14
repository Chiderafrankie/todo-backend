const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    database: 'todo_db',
    user: 'mac',
    password: ''
})

module.exports = pool 