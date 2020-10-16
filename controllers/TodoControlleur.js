const Todo = require('../models/todos');

const todo_index = (req, res) => {
    Todo.find().sort({ createdAt : -1 })
      .then((result)=> {
          res.render('todos/todo', {todos : result})
      })
      .catch((err)=> {
          console.log(err);
      })
}


// const blog_details = (req, res) => {
//     const id = req.params.id;
//     Blog.findById(id)
//       .then(result => {
//         res.render('blogs/details', { blog: result, title: 'Blog Details' });
//       })
//       .catch(err => {
//         console.log(err);
//     });
    
// }


const todo_delete = (req, res) => {
    const id = req.params.id;
    Todo.findByIdAndDelete(id)
      .then(result => {
        res.json({ redirect: '/todo' });
      })
      .catch(err => {
        console.log(err);
      });
}
const todo_create = (req , res) => {
    res.render('todos/create', { title: 'Create a new blog' });
}

const todo_store = (req, res) => {
    const todo = new Todo(req.body);
  
    todo.save()
      .then(result => {
        res.redirect('/todo');
      })
      .catch(err => {
        console.log(err);
    });
    
}

module.exports = {
    todo_index,
    // blog_details,
    // blog_delete,
    todo_store,
    todo_create,
    todo_delete

}


