// Declare Variables
let geoData = {};
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

const fetch = require("node-fetch");

// Initialize the main project folder
app.use(express.static("dist"));

//log directory to console
console.log(__dirname);

//get API Key
const dotenv = require("dotenv");
dotenv.config();

const weatherbitApiKey = "9724fd8f861241848ed47ffc0ff7998c";
const pixabayApiKey = "17157704-eccea26d680203f3390b998d1";

// Initialize main route
app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

app.post("/data", function (req, res) {
  // get the data from the frontend and add the incoming data to "geoData = {}"
  geoData.name = req.body.name;
  geoData.lat = req.body.lat;
  geoData.lng = req.body.lng;
  geoData.countryCode = req.body.countryCode;
  geoData.departure = req.body.departure;
  geoData.daysUntil = req.body.daysUntil;
  // call the weatherbit API and add received data to "geoData = {}"
  let callWeatherbitApi = new Promise((resolve, reject) => {
    const lat = geoData.lat;
    const lng = geoData.lng;
    weatherbitApi(lat, lng)
      .then((res) => {
        resolve(res);
        geoData.currentTemp = res.data[0].temp;
        geoData.weatherIcon = res.data[0].weather.icon;
      })
      .catch((err) => {
        console.log(err);
      });
  });

  // call the pixabay API and add received data to "geoData = {}"
  let callPixabayApi = new Promise((resolve, reject) => {
    const city = geoData.name;
    pixabayApi(city)
      .then((res) => {
        resolve(res);
        geoData.image = res.hits[0].webformatURL;
      })
      .catch((err) => {
        console.log(err);
      });
  });
});
// send data back to the frontend
app.get("/getData", (req, res) => {
  console.log(geoData);
  res.send(geoData);
});

// fetch Weatherbit API
let weatherbitApi = async (lat, lng) => {
  const weatherbitApiReqURL = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lng}&key=${weatherbitApiKey}`;
  const res = await fetch(weatherbitApiReqURL);
  let result = {};
  try {
    result = await res.json();
  } catch (error) {
    console.log("error:", error);
  }
  return result;
};

// fetch Pixabay API
let pixabayApi = async (city) => {
  const pixabayApiReqURL = `https://pixabay.com/api/?key=${pixabayApiKey}&q=${city}&image_type=photo`;
  const res = await fetch(pixabayApiReqURL);
  let result = {};
  try {
    result = await res.json();
  } catch (error) {
    console.log("error:", error);
  }
  return result;
};

// Setup Server
const server = app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
