const router = require("express").Router();
const DoctorCtrl = require("../controllers/Doctor.Ctrl");

//save doctor data
router.post( "/",DoctorCtrl.createDoctor);

//Get all doctor data
router.get( "/",DoctorCtrl.readAllDoctors);

//Get a specific doctor
router.get( "/:id",DoctorCtrl.getOneDoctor);

module.exports = router;