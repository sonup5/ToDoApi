const express = require("express");
const app= express();


const mongoose = require("mongoose");
const userRoute=require('./routes/user')
const postTodo=require('./routes/postTodos');
const getToDo=require('./routes/getAllTodos')
const deleteToDo=require('./routes/deleteToDo')

app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/toDoApp").then(() => {
  console.log("connected to database");
});



/// create a new user
app.use('/api',userRoute);
//add new todo
app.use('/api',postTodo);
// get all todo items according to user
app.use('/api',getToDo)
//delete particular todo item with object id 
app.use('/api',deleteToDo);



app.listen(5000, () => {
  console.log("server is runnning");
});
