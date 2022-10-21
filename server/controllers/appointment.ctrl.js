const Appointment = require("../models/Appointment.model");

//create appointment
const createAppointment = (req,res)=>{

    console.log(`<-- ${req.method} Request`);
    const appointment = new Appointment({
        docname:req.body.docname,
        ApptDate:req.body.ApptDate,
        BookDate:Date.now(),
        Patient:req.body.Patient,
        email:req.body.email,
        phone:req.body.phone,
        age:req.body.age,
        gender:req.body.gender,
    });
    Appointment.create(appointment).then(() => {
        res.json("Appointment added")
        console.log(`--> ${req.method} Response`);
    }).catch((error)=>{
        console.log(`${error.message}`)
    })
}

//get all the appointments
const readAllAppointments = (req,res)=>{
    console.log(`<-- ${req.method} Request`);

    Appointment.find().then((appointments)=>{
        console.log(`--> ${req.method} Response`);
        res.json(appointments);
    }).catch((error)=>{
        console.log(`${error.message}`)
    })
}

//Get a appointment
const getOneAppointment = (req,res)=> {
    console.log(`<-- ${req.method} Request`);
    const id = req.params.id;

    Appointment.findById(id).then((appointment)=>{
        console.log(`--> ${req.method} Response`);
        res.json(appointment);
    }).catch((error)=>{
        console.log(`${error.message}`)
    })
}

//Update an appointment
const UpdateAppointment = (req, res) => {
    console.log(`<-- ${req.method} Request`);
    const id = req.params.id;

    Appointment.findByIdAndUpdate({
        _id: id
    }, {
        $set: {
            docname: req.body.docname,
            ApptDate: req.body.ApptDate,
            BookDate: req.body.BookDate,
            Patient: req.body.Patient,
            email: req.body.email,
            phone: req.body.phone,
            age: req.body.age,
            gender: req.body.gender
        }
    }, {
        new: true
    }).then(() => {
        console.log(`--> ${req.method} Response`);
        res.status(200).json("Appointment updated");
    }).catch((error) => {
        console.log(`${error.message}`)
        res.status(404).json("Appointment not updated");
    })
}

//Delete an appointment
const DeleteAppointment = async (req, res) => {
    console.log(`<-- ${req.method} Request`);
    Appointment.findByIdAndDelete({ _id:req.params.id})
        .then(() => {
            res.status(200).json("Appointment has been deleted");
            console.log(`--> ${req.method} Response`);
        }).catch((error)=>{
        res.status(500).json(error);
    })
};
module.exports={createAppointment,readAllAppointments,getOneAppointment, DeleteAppointment, UpdateAppointment}