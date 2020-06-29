const updateUi = async () => {
  const request = await fetch("/all");
  try {
    const allData = await request.json();
    console.log(allData);
    //update UI with data from the server get route
    document.getElementById("temp").innerHTML = allData.location;
    document.getElementById("date").innerHTML = allData.departure;
  } catch (error) {
    console.log("error", error);
  }
};

export { updateUi };
