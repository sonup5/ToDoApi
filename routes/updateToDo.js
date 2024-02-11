const express = require('express');
const router = express.Router();
const handleUpdateToDo =require('../controller/handleUpdateToDo')

router.put('/updateTodo/:id',handleUpdateToDo)
module.exports = router;