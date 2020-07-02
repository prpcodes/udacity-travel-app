let location = "";

function geoHandler() {
  let location = document.getElementById("location").value;
  //call fetch function
  fetch("http://localhost:8081/geoHandler", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: {
        location: location,
      },
    }),
  });
}

export { geoHandler };
