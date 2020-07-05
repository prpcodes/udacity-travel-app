const updateUi = async (cityName) => {
  const request = await fetch("/all");
  try {
    const allData = await request.json();
    console.log(allData);
    //update UI with data from the server get route
    document.getElementById("destination").innerHTML = cityName;
    //document.getElementById("countdown").innerHTML = allData.lng;
  } catch (error) {
    console.log("error", error);
  }
};
export { updateUi };
