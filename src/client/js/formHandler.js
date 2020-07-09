/* Global Variables */
const geoURL = "http://api.geonames.org/searchJSON?q=";
const apiKey = "&maxRows=10&username=pduoebsi1";
let geoData = {};

function formHandler() {
  // get form input
  let cityName = document.getElementById("zip").value;
  let departure = document.getElementById("date").value;

  let countDownDate = Date.parse(departure);
  // Get today's date and time
  let now = new Date().getTime();
  // Find the distance between now and the count down date
  let distance = countDownDate - now;
  // Time calculations for days, hours, minutes and seconds
  let daysUntil = Math.floor(distance / (1000 * 60 * 60 * 24));
  geoData.daysUntil = daysUntil;
  //get data from API and save it to geoData
  Client.geonamesApi(geoURL, cityName, apiKey)
    .then((res) => {
      geoData.name = res.geonames[0].name;
      geoData.lat = res.geonames[0].lat;
      geoData.lng = res.geonames[0].lng;
      geoData.countryCode = res.geonames[0].countryCode;
      //get data from API and save it to geoData
      Client.weatherbitApi(geoData).then((res) => {
        geoData.currentTemp = res.data[0].temp;
        geoData.weatherIcon = res.data[0].weather.icon;
        //get data from API and save it to geoData
        Client.pixabayApi(cityName).then((res) => {
          geoData.image = res.hits[0].webformatURL;
          console.log(geoData);
          //update UI with the data from geoData
          Client.updateUi(geoData);
        });
      });
    })
    //catch errors
    .catch((err) => {
      console.log(err);
    });
}

export { formHandler };
