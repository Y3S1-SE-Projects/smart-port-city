const router = require("express").Router();
const FoodCtrl = require("../controllers/Food.Ctrl");

//save food data
router.post( "/",FoodCtrl.createFood);

//Get all food data
router.get( "/",FoodCtrl.readAllFoods);

//Get a specific food
router.get( "/:id",FoodCtrl.getOneFood);

//Get a update a food
router.put( "/:id",FoodCtrl.UpdateFood);

//Get a delete a food
router.delete( "/:id",FoodCtrl.DeleteFood);

module.exports = router;