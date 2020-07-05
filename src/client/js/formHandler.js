/* Global Variables */

//http://api.geonames.org/searchJSON?q=Vienna&maxRows=10&username=pduoebsi1
const baseURL = "http://api.geonames.org/searchJSON?q=";
let cityName = "";
const apiKey = "&maxRows=10&username=pduoebsi1";
let countdown = 0;

// get form Input and call API-Function with the Input
function formHandler() {
  // get zip data from document
  const cityName = document.getElementById("zip").value;
  //call API function
  Client.geoApi(baseURL, cityName, apiKey)
    //post everything to server.js
    .then(function (data) {
      Client.postData("/add", {
        lat: data.geonames[0].lat,
        lng: data.geonames[0].lng,
      });

      //call updateUI function to add data to the UI
      Client.updateUi(cityName);
    });
}

export { formHandler };
