// Declare Variables
const location = {};
const PORT = 8081;
const geoApiKey = `pduoebsi1`;
const geoApiURL = `http://api.geonames.org/searchJSON?q=${location}&maxRows=10&username=`;

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

// Access the parse results as request.body
app.post("/geoHandler", function (req, res) {
  console.log(req.body.data.location);
});

// Setup Server
const server = app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
