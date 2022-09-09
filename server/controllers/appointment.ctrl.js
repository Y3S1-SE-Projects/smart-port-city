const Appointment = require("../models/Appointment.model");

//create appointment
const createAppointment = (req,res)=>{

    console.log(`<-- ${req.method} Request`);
    const appointment = new Appointment(req.body);

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

module.exports={createAppointment,readAllAppointments,getOneAppointment}