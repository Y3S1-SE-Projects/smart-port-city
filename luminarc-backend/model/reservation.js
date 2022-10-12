const mongoose = require('mongoose')
 
const ReservationSchema = mongoose.Schema({
    checkin:{
        type: String,
        required:true
    },
    checkout:{
        type: String,
        required: true
    },
    promocode:{
        type: String,
    },
    roomtype:{
        type: String,
        required: true
    },
    package:{
        type: String,
        required: true
    },
    noofguests:{
        type: String,
        required: true
    },

})
 
module.exports = mongoose.model('reservations', ReservationSchema)