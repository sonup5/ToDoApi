const express = require('express');
const router = express.Router();
const {handleDelete}= require('../controller/handleDelete');

router.delete('/deletetodo/:id',handleDelete);
module.exports = router;