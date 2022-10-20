const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();
const path = require("path");

// import routes
const postRoutes = require("./routes/posts");

//app middleware
app.use(bodyParser.json());
app.use(cors());

// route middleware
app.use(postRoutes);

//declaring port number and database and assigning it to a variable
const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DATABASE;

// database connection
mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database is successfully connected");
  })
  .catch((err) => console.log("Database connection error", err));

// Heroku client deployment build
// app.use(express.static(path.join(__dirname, "./client/build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build", "index.html"));
// });

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
