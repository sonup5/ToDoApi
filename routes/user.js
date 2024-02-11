const {Router}=require('express')
const router=Router();
const {handleCreateUser}=require('../controller/handleCreateUser');

router.post('/createUser',handleCreateUser);



module.exports= router;
