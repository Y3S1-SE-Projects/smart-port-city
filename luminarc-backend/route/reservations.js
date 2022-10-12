const express = require('express')
const Reservation = require('../model/reservation')
const router = express.Router()
 
router.get('/', (req, resp)=>{
    Reservation.find().then(data => {
        resp.json(data)
    }).catch(e => {
        resp.json({message : e})
    })
})
 
router.post('/create', (req, resp)=>{
    const reservation = new Reservation({
        checkin: req.body.checkin,
        checkout: req.body.checkout,
        promocode: req.body.promocode,
        roomtype: req.body.roomtype,
        package: req.body.package,
        noofguests: req.body.noofguests,
        
    })
    reservation.save().then(data => {
        resp.json(data)
    }).catch(e => {
        resp.json({message: e})
    })
})
module.exports = router;