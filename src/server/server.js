// Declare Variables
const projectData = {};
const PORT = 3000;
const apiKey = `pduoebsi1`;
let location = "";
const locationArr = {};

// Require Express to run server and routes
const express = require("express");
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//get API Keys
const dotenv = require("dotenv");
dotenv.config();

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static("dist"));

// location form input endpoint
app.post("/location", function (req, res) {
  var location = req.body;
  console.log(location);
  locationArr.push(location);
  res.send("Location added!");
});

// GET Request - return data stored in projectData
app.get("/form", getData);

function getData(req, res) {
  res.send(projectData);
}

// POST Request - add incoming data to projectData
app.post("/add", callBack);

function callBack(req, res) {
  projectData["temp"] = req.body.temp;
  projectData["date"] = req.body.date;
  projectData["content"] = req.body.content;
  res.send(projectData);
}

// Setup Server
const server = app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
