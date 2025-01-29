var addGameButton = document.querySelector('.add-calendar-button');
var teamInput = document.querySelector('#find-team');

addGameButton.addEventListener('click', function() {
 console.log('== teamInput:', teamInput.value);

 var teamName = teamInput.value;
 if (teamName != 'denver' && teamName != 'maryland' && teamName != 'jh') {
   alert("oops thats not a team!")
   teamInput.value = "";
   return;
 }
 var request = new XMLHttpRequest();
 var requestURL = "/addevent/" + teamName;
 request.open('POST', requestURL);

 request.setRequestHeader(
  'Content-Type',
  'application/json'
 );
 
 request.send();
 alert("added " + teamName + " game to calendar!")
})