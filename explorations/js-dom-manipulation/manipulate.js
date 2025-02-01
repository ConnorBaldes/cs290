var userSuppliedValue =
  "<img src=x onerror=\"alert('You were hacked!')\" >";

var photoCards = document.getElementsByClassName("photo-card");
console.log("== photoCards[0].innerHTML:", photoCards[0].innerHTML);
console.log("== photoCards[0].textContent:", photoCards[0].textContent);
// photoCards[0].innerHTML = userSuppliedValue;
photoCards[0].textContent = userSuppliedValue;

function insertPhotoCard(url, caption) {
  /*
    <section class="photo-card">
      <div class="img-container">
        <img class="person-photo-img" src="https://vignette3.wikia.nocookie.net/starwars/images/6/62/LukeGreenSaber-MOROTJ.png" />
      </div>
      <div class="caption">
        Luke ready to fight.
      </div>
    </section>
   */
   var photoCardSection = document.createElement('section');
   photoCardSection.classList.add("photo-card");
   photoCardSection.classList.add("some-other-class");
   photoCardSection.setAttribute('id', 'new-photo-card');

   var imgContainerDiv = document.createElement('div');
   imgContainerDiv.classList.add("img-container");
   photoCardSection.appendChild(imgContainerDiv);

   var img = document.createElement('img');
   img.classList.add("person-photo-img");
   img.src = url;
   imgContainerDiv.appendChild(img);

   var captionDiv = document.createElement('div');
   captionDiv.classList.add("caption");
   captionDiv.textContent = caption;
   photoCardSection.appendChild(captionDiv);

   console.log("== photoCardSection:", photoCardSection);

   var photoCardContainer = document.getElementById("photo-card-container");
   // photoCardContainer.appendChild(photoCardSection);
   photoCardContainer.insertBefore(
     photoCardSection,
     photoCardContainer.firstChild
   );
}

insertPhotoCard('http://placekitten.com/480/480', "Luke as a kitty");
insertPhotoCard('http://placekitten.com/480/480', "Another kitty");

function removeLastPhotoCard() {
  var photoCards = document.getElementsByClassName("photo-card");
  photoCards[photoCards.length - 1].remove();
  // photoCards[photoCards.length - 1].parentNode.removeChild(photoCards[photoCards.length - 1]);
}
