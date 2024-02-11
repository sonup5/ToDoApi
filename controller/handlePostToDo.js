const todo= require('../models/todo');
const users= require('../models/user')

async function handlePostToDo(req, res,next){
      try {
    const user = await users.findOne({ userName: req.params.username });

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    const { title, description, completed } = req.body;
    const newtodo = await todo.create({
      title: title,
      description: description,
      completed: completed,
      userName: user.userName,
    });
  
    return res.json({ msg: "add successfully",newtodo}).status(201);
  } catch (err) {
    return res.json({ msg: "user not found" });
  }

}
module.exports ={handlePostToDo};