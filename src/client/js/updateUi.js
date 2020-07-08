const updateUi = (result) => {
  const content = document.getElementById("entryHolder");

  content.insertAdjacentHTML(
    "afterbegin",
    `
      <h2 class="title">Your Next Trip</h2>
      <div id="content">
        <div id="content-text">
          <h3 id="destination">Destination: ${result.name}</h3>
          <p id="countdown">Days Until: ${result.daysUntil}</p>
          <p id="current-weather">Current Weather: ${result.currentTemp} C° <img id="icon" src="https://www.weatherbit.io/static/img/icons/${result.weatherIcon}.png" alt="weather icon"/></p>
        </div>
        <img id="city-image" src=${result.image} alt="image of your destination"/>
      <div>
    `
  );
};
export { updateUi };
