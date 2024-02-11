const todo= require('../models/todo');


async function handleGetTodo(req,res,next){
    try {
    const data = await todo.find({ userName: req.params.username });
    if (data.length <= 0) {
      return res.json({ msg: "no todos" });
    } else {
      return res.json({ todos: data });
    }
  } catch (err) {
    return res.json({ msg: "error" });
  }

}
module.exports = {handleGetTodo};