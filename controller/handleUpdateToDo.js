const todo = require("../models/todo");

async function handleUpdateToDo(req, res) {
  const id = req.params.id;

  const { title, description, completed } = req.body;
  const entry = await todo.findOneAndUpdate(
    { _id: id },
    { title: title, description: description, completed: completed },
    { new: true }
  );
  if(!entry){
    return res.json({'msg':'no such todo found'})
  }
  return res.json({'msg':'updated successfully'})
}


module.exports =handleUpdateToDo
