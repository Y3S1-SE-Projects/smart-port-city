const cloudinary = require("cloudinary");
const fs = require("fs");
require('dotenv').config();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

const uploadCtrl = async (req, res) => {
    try {
        console.log(`<-- ${req.method} Request`);
        const file = req.file.path;
        await cloudinary.v2.uploader.upload(file,
            {
                folder: "Foods"
            }, async (err, result) => {
                if (err) throw err;

                res.json({url: result.secure_url});
                console.log(`--> ${req.method} Response`);
            }
        );
    } catch (err) {
        return res.status(500).json({msg: err.message});
    }
};

const removeTmp = (path) => {
    fs.unlink(path, (err) => {
        if (err) throw err;
    });
};

module.exports = uploadCtrl;