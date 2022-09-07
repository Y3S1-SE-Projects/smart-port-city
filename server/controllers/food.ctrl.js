const Food = require("../models/Food.model");

//create food
const createFood = (req,res)=>{

    console.log(`<-- ${req.method} Request`);
    const food = new Food(req.body);

    Food.create(food).then(() => {
        res.json("Food added")
        console.log(`--> ${req.method} Response`);
    }).catch((error)=>{
        console.log(`${error.message}`)
    })
}

//get all the foods
const readAllFoods = (req,res)=>{
    console.log(`<-- ${req.method} Request`);

    Food.find().then((foods)=>{
        console.log(`--> ${req.method} Response`);
        res.json(foods);
    }).catch((error)=>{
        console.log(`${error.message}`)
    })
}

//Get a food
const getOneFood = (req,res)=> {
    console.log(`<-- ${req.method} Request`);
    const id = req.params.id;

    Food.findById(id).then((food)=>{
        console.log(`--> ${req.method} Response`);
        res.json(food);
    }).catch((error)=>{
        console.log(`${error.message}`)
    })
}

module.exports={createFood,readAllFoods,getOneFood}