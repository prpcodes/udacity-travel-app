import "./styles/style.scss";

/* Global Variables */
const baseURL = "https://api.openweathermap.org/data/2.5/weather?zip=";
let zipCode = "10001";
const apiPrefix = "&appid=";
const apiUnits = "&units=imperial";
const apiKey = `${apiPrefix}ef4e3b78548a4d6a518f96e68460622f${apiUnits}`;

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()(+1) + "." + d.getDate() + "." + d.getFullYear();
console.log(newDate);

function getNewDate(params) {
  let d = new Date();
  let newDate = d.getMonth()(+1) + "." + d.getDate() + "." + d.getFullYear();
  return newDate;
  console.log(newDate);
}

// addEventListener
document.getElementById("generate").addEventListener("click", performAction);

// POST
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

function performAction(e) {
  // get zip data from document
  const zipCode = document.getElementById("zip").value;
  // get feelings data from document
  const content = document.getElementById("feelings").value;

  //call fetch function
  getEntrys(baseURL, zipCode, apiKey)
    //post everything to server.js
    .then(function (data) {
      postData("/add", { temp: data.main.temp, date: newDate, content });

      //call updateUI function to add data to the UI
      updateUi();
    });
}

//make API call to get JSON data
const getEntrys = async (baseURL, zipCode, apiKey) => {
  const res = await fetch(baseURL + zipCode + apiKey);
  try {
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error", error);
    // appropriately handle the error
  }
};

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
