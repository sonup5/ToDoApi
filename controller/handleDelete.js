const todo = require("../models/todo");

async function handleDelete(req, res, next) {
  try {
    const todoId = req.params.id;
    const deletedTodo = await todo.findByIdAndDelete(todoId);

    if (!deletedTodo) {
      return res.status(404).json({ msg: "Todo not found" });
    }

    return res.json({ msg: "Todo deleted successfully", deletedTodo });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ msg: "Server Error" });
  }
}
module.exports={handleDelete};
