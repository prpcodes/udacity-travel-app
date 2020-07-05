// Declare Variables
const geoData = {};
const PORT = 8080;

// Require Express to run server and routes
const express = require("express");
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));

// GET Request - return data stored in geoData
app.get("/all", getData);

function getData(req, res) {
  res.send(geoData);
}

// POST Request - add incoming data to geoData
app.post("/add", callBack);

function callBack(req, res) {
  geoData["lat"] = req.body.lat;
  geoData["lng"] = req.body.lng;
  console.log(geoData);
  res.send(geoData);
}

// Setup Server
const server = app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
