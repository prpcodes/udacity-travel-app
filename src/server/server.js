// Declare Variables
const PORT = 8081;

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
app.use(express.static("dist"));

//log directory to console
console.log(__dirname);

// Initialize main route
app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

// Setup Server
const server = app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
