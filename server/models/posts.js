const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({

    topic:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    postCategory:{
        type:String,
        required:true       
    },
    date:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    cardno:{
        type:String,
        required:true
    },
    cvv:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Posts', postSchema);