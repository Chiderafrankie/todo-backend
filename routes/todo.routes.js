const express = require('express');
const router = express.Router();
const { createTodo, getAllTodos, getOneTodo, updateTodo, deleteTodo } = require('../controllers/todo.controller');


router.post('/todos', createTodo);
router.get('/todos', getAllTodos);
router.get('/todos/:id', getOneTodo);
router.put('/todos/:id', updateTodo);
router.delete('/todos/:id',deleteTodo);

module.exports = router;