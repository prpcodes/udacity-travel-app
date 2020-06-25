function checkUrl(inputText) {
    console.log("::: Running checkForName :::", inputText);
    var urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;


    if(urlRegex.test(inputText)) {
        console.log("URL test Successful!")
        return true
    } else {
        alert("Error! Entered string is not a valid URL.")
        return false
    }
}

export { checkUrl }
