const express = require('express');
const TodoControlleur = require('../controllers/TodoControlleur');
const router = express.Router();



//blogs 
router.get('/todo', TodoControlleur.todo_index);
router.post('/todos', TodoControlleur.todo_store);
router.get('/create', TodoControlleur.todo_create);
// router.get('/:id',BlogControlleur.blog_details);
router.delete('/todos/:id', TodoControlleur.todo_delete); 

module.exports = router;