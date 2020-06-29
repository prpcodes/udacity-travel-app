import "./styles/style.scss";

/* Global Variables */
let location = "";

// addEventListener
document.getElementById("generate").addEventListener("click", getFormData);

function getFormData() {
  console.log("click");
  // get location data from document
  const location = document.getElementById("location").value;
  const departure = document.getElementById("departure").value;
  const apiURL = `http://api.geonames.org/searchJSON?q=${location}&maxRows=10&username=`;

  //update Ui - TODO: Add after Weather Update
  document.getElementById("city").innerHTML = location;
  document.getElementById("departing").innerHTML = departure;
}

/*
// POST TODO
const postData = async (url = "", data = {}) => {
  console.log(data);
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    // Body data type must match "Content-Type" header
    body: JSON.stringify({
      date: data.date,
      temp: data.temp,
      content: data.content,
    }),
  });
  try {
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};
*/

function performAction(e) {
  //call fetch function
  getEntrys(apiURL)
    //post everything to server.js
    .then(function (data) {
      postData("/add", { lat: geonames.lat, long: geonames.long });
      console.log(lat, long);

      //call updateUI function to add data to the UI
      updateUi();
    });
}

//make API call to get JSON data
const getEntrys = async (apiURL) => {
  const res = await fetch(apiURL);
  try {
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error", error);
    // appropriately handle the error
  }
};

/* TODO
const updateUi = async () => {
  const request = await fetch("/all");
  try {
    const allData = await request.json();
    console.log(allData);
    //update UI with data from the server get route
    document.getElementById("temp").innerHTML = allData.temp;
    document.getElementById("date").innerHTML = allData.date;
    document.getElementById("content").innerHTML = allData.content;
  } catch (error) {
    console.log("error", error);
  }
};
*/
