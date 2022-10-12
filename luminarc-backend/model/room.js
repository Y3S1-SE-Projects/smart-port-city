const mongoose = require('mongoose')
 
const RoomSchema = mongoose.Schema({
name:{
        type: String,
        required:true
    },
    maxcount:{
        type: Number,
        required: true
    },
  
    rentpernight:{
        type: Number,
        required: true
    },

    imageurls:[],
    currentbookings:[],
    typeone:{
        type: String,
        required: true
    },
    typetwo:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
},{
    timestamps:true,
    })


 
module.exports = mongoose.model('rooms', RoomSchema)