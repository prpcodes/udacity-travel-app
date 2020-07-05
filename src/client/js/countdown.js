/*countdown
function countdown() {
  // Create a new date instance dynamically with JS
  let now = new Date();
  let today =
    now.getMonth() + 1 + "." + now.getDate() + "." + now.getFullYear();
  console.log(today);

  // Set the date we're counting down to
  var countDownDate = new Date("Jan 5, 2021").getTime();
  var distance = countDownDate - today;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));

  // Display the result in the element with id="demo"
  document.getElementById("countdown").innerHTML = days + "d ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}
*/
