const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const reservationRoute = require('./route/reservations')
const roomsRoute = require('./route/rooms')
const mongoose = require('mongoose')
 
app.use(cors())
app.use(bodyParser.json())
app.use(express.json())
app.use('/reservations', reservationRoute)
app.use('/rooms', roomsRoute)

mongoose.connect("mongodb://localhost:27017").then(data => {
    console.log("connected to DB")
}).catch(error => {
    console.log(error)
})
 
app.listen(4000)