function checkForm(inputText) {
  console.log("::: Running checkForName :::", inputText);
  var urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;

  if (urlRegex.test(inputText)) {
    console.log("URL test Successful!");
    return true;
  } else {
    alert("Error! Entered string is not a valid City Name.");
    return false;
  }
}

export { checkForm };
