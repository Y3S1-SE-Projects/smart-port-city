const mongoose = require("mongoose");
const DoctorSchema = new mongoose.Schema({

    name:{
        type:String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String
    }
})
const doctors = mongoose.model("Doctor", DoctorSchema);

module.exports = doctors;