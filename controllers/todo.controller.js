const pool = require('../db')

const createTodo = async (req, res) => {
    const {note, timeDue} = req.body

   const result = await pool.query(
        'INSERT INTO todos (note, time_due) VALUES ($1, $2) RETURNING *',
        [note, timeDue]
    )
    res.status(201).json(result.rows[0])
}

const getAllTodos = async (req, res) => {
    const result = await pool.query('SELECT * FROM todos')
    res.status(200).json(result.rows)
}

const getOneTodo = async (req, res) => {
    const id = req.params.id
    const result = await pool.query('SELECT * FROM todos WHERE id = $1', [id])

    if (result.rows.length === 0) {
        return res.status(404).json({message: 'Todo not found'})
    }
    res.status(200).json(result.rows[0])
    
}

const updateTodo = async (req, res) => {
    const {note, timeDue} = req.body
    const id = req.params.id

    const result = await pool.query(
        'UPDATE todos SET note = $1, time_due = $2, time_updated = NOW() WHERE id = $3 RETURNING *',
        [note, timeDue, id]
    )

    if (result.rows.length === 0) {
        return res.status(404).json({message: 'Todo not found'})    
    }
    res.status(200).json(result.rows[0])
}

const deleteTodo = async (req, res) => {
    const id = req.params.id

    const result = await pool.query('DELETE FROM todos WHERE id = $1 RETURNING *', [id])

    if (result.rowCount === 0) {
        return res.status(404).json({message: 'Todo not found'})
    }

    res.status(204).send()
}

module.exports = {
    createTodo, getAllTodos,
    getOneTodo, updateTodo, deleteTodo
}   
