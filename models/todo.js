const mongoose = require('mongoose')
const user=require('./user')
const schema= new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ''
    },
    completed: {
        type: Boolean,
        default: false
    },
    userName:{
        type:String
    }

    

})
const toDoModel= mongoose.model('todos',schema );
module.exports=toDoModel;