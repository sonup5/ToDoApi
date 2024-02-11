const express = require('express');
const router = express.Router();
const {handlePostToDo}= require('../controller/handlePostToDo')

router.post('/createTodo/:username',handlePostToDo);
module.exports=router;


