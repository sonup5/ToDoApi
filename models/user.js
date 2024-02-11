const mongoose = require('mongoose');
const todos=require('./todo')

const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        unique:true,
    },
    
    
})
const userModel= mongoose.model('user',userSchema);
module.exports = userModel;