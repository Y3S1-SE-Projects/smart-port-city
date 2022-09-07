const router = require("express").Router();
const multer = require("multer");
const FoodUploadCtrl = require("../controllers/foodImg.ctrl");

const upload = multer({
    storage: multer.diskStorage({})
})


//upload template file
router.post( "/food",upload.single("file"),FoodUploadCtrl);

module.exports = router;