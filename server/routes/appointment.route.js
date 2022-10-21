const router = require("express").Router();
const AppointmentCtrl = require("../controllers/Appointment.Ctrl");

//save appointment data
router.post( "/",AppointmentCtrl.createAppointment);

//Get all appointment data
router.get( "/",AppointmentCtrl.readAllAppointments);

//Get a specific appointment
router.get( "/:id",AppointmentCtrl.getOneAppointment);

//Update a specific appointment
router.put( "/:id",AppointmentCtrl.UpdateAppointment);

//Delete a specific appointment
router.delete( "/:id",AppointmentCtrl.DeleteAppointment);

module.exports = router;