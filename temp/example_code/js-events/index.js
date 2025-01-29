window.addEventListener('click', function (event) {
  console.log("== The window was clicked, event.target:", event.target);
});

function buttonClickListener(event) {
  console.log("== A button was clicked, event:", event);
  var button = event.currentTarget;
  var box = button.parentNode;
  box.classList.toggle("highlighted");
}

/*
 * .in-box-button
 */
var buttons = document.getElementsByClassName("in-box-button");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', buttonClickListener);
}

/*
 * .box
 */
var boxes = document.getElementsByClassName("box");
for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', function (event) {
    console.log("== A box was clicked");
    console.log("  -- event.target:", event.target);
    console.log("  -- event.currentTarget:", event.currentTarget);
    event.stopPropagation();
  });
}

/*
 * #website-link
 */
var link = document.getElementById("website-link");
link.addEventListener('click', function (event) {
  console.log("== The link was clicked");
  event.preventDefault();
});

/*
 * #box-container .box.highlighted
 */
var highlightedBox = document.querySelector("#box-container .box.highlighted");

setTimeout(function () {
  alert("5 seconds has elapsed");
}, 5000);
