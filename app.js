const express = require('express');
const { result } = require('lodash');

const app = express();

const mongoose = require('mongoose');

const morgan = require('morgan');

const todoRoute =require('./routes/todoRoute');



//connect to mongo DB:
const dbURI = 'mongodb+srv://ayoub:agourai1980@node.krnho.mongodb.net/todoList?retryWrites=true&w=majority';
mongoose.connect(dbURI ,  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then((result) => app.listen(4000)) 
    .catch((err)=> console.log(err));


app.set('view engine', 'ejs');

app.use(express.static('public'));//il permet de done autorisation de accepter les fichier localise dans folder public
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
// app.use((req, res, next) => {
//   res.locals.path = req.path;
//   next();
// });


app.get('/', (req, res)=> {
    res.render('home');
});

// app.get('/todo', (req, res)=> {
//     res.render('/todos/todo');
// });



app.use(todoRoute);

// //404 page 
// // il faut etre toujour a la fin des tous les requests 
// app.use((req, res)=>{
//     res.status(404).render('404');
// })