const router = require("express").Router();
const AppointmentCtrl = require("../controllers/Appointment.Ctrl");

//save appointment data
router.post( "/",AppointmentCtrl.createAppointment);

//Get all appointment data
router.get( "/",AppointmentCtrl.readAllAppointments);

//Get a specific appointment
router.get( "/:id",AppointmentCtrl.getOneAppointment);

module.exports = router;