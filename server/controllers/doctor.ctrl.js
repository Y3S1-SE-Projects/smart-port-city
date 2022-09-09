const Doctor = require("../models/Doctor.model");

//create doctor
const createDoctor = (req,res)=>{

    console.log(`<-- ${req.method} Request`);
    const doctor = new Doctor(req.body);

    Doctor.create(doctor).then(() => {
        res.json("Doctor added")
        console.log(`--> ${req.method} Response`);
    }).catch((error)=>{
        console.log(`${error.message}`)
    })
}

//get all the doctors
const readAllDoctors = (req,res)=>{
    console.log(`<-- ${req.method} Request`);

    Doctor.find().then((doctors)=>{
        console.log(`--> ${req.method} Response`);
        res.json(doctors);
    }).catch((error)=>{
        console.log(`${error.message}`)
    })
}

//Get a doctor
const getOneDoctor = (req,res)=> {
    console.log(`<-- ${req.method} Request`);
    const id = req.params.id;

    Doctor.findById(id).then((doctor)=>{
        console.log(`--> ${req.method} Response`);
        res.json(doctor);
    }).catch((error)=>{
        console.log(`${error.message}`)
    })
}

module.exports={createDoctor,readAllDoctors,getOneDoctor}