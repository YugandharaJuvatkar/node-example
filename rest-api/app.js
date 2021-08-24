const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

//Miidleware
app.use(cors());
app.use(bodyParser.json());

//Import Routes
const postRoutes = require("./routes/posts");

app.use("/posts", postRoutes);

//Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

//connect
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("Connect to DB")
);

//listenning to server
app.listen(8080);
