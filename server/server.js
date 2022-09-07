const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require('dotenv').config();

const DB_connect = require("./utils/database.connection");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Start the Server
app.listen(PORT, () => {
    console.log(`Server is started and running on port number: ${PORT}`);
    DB_connect().then(() => {
        console.log("MongoDB Connecting...");
    });
});

//main routes
 app.use("/food", require("./routes/food.route"));
 app.use("/upload", require("./routes/FileUpload.route"));