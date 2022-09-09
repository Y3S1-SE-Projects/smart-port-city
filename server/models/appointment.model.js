const mongoose = require("mongoose");
const AppointmentSchema = new mongoose.Schema({

    docname:{
        type:String,
        required: true
    },
    ApptDate: {
        type: Date,
        required: true
    },
    BookDate: {
        type: Date,
        default: Date.now()
    },
    Patient: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    }

})
const appointments = mongoose.model("Appointment", AppointmentSchema);

module.exports = appointments;