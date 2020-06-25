function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('url').value
    Client.checkUrl(formText)
 
    fetch('http://localhost:8081/analize', {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
            text: formText 
        })
    })
    .then(res => res.json())
    .then(function(res){
        document.getElementById('Polarity').innerHTML = res.polarity;
        document.getElementById('PolarityConfidence').innerHTML = res.polarity_confidence;
        document.getElementById('Subjectivity').innerHTML = res.subjectivity;
        document.getElementById('SubjectivityConfidence').innerHTML = res.subjectivity_confidence;
    })
    .catch(function(error) {
        alert(error);
    });
}

export { handleSubmit }
