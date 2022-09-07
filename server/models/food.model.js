const mongoose = require("mongoose");
const FoodSchema = new mongoose.Schema({

    name:{
        type:String,
        required: true
    },
    origin:{
        type:String,
        required: true
    },
    price:{
        type:Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image:{
        type: String
    }
})
const foods = mongoose.model("Food", FoodSchema);

module.exports = foods;