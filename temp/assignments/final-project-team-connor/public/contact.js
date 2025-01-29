var submitFormButton = document.querySelector('.submit-button');
var nameInput = document.querySelector('#name-text-input');
var emailInput  = document.querySelector('#email-text-input');
var messageInput = document.querySelector('#message-text-input');


submitFormButton.addEventListener('click', function() {
    console.log('== nameInput:', nameInput.value);
    console.log('== emailInput:', emailInput.value);
    console.log('== messageInput:', messageInput.value);
    
    var name = nameInput.value;
    var email = emailInput.value;
    var message = messageInput.value; 
    var request = new XMLHttpRequest();
    var requestURL = "/sendForm"; //+ name + "/" + email + "/" + message;
    
    request.open('POST', requestURL);

    var form = {
        name: name,
        email: email,
        message: message
    };
    var requestBody = JSON.stringify(form);

    request.setRequestHeader(
        'Content-Type', 'application/json'
    );

    request.addEventListener('load', function(event) {
        if (event.target.status !== 200) {
            var responseToUser = event.target.response;
            alert("Error storing in database! " + responseToUser);
        } else {
            console.log("Successfully stored in database!");
        }
    })

    request.send(requestBody);

    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
    console.log('== nameInput:', nameInput.value);
    console.log('== emailInput:', emailInput.value);
    console.log('== messageInput:', messageInput.value);
})