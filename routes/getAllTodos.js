const express = require('express');
const router = express.Router();
const {handleGetTodo}=require('../controller/handleGetToDo');
router.get('/allToDos/:username',handleGetTodo);



module.exports = router;