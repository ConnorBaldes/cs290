# Styling with CSS

The goals of this assignment are to exercise your CSS skills and to give you practice at making a coded page match a set of provided mocks, which is a common task for a web developer.

Here, you are provided with an un-styled `index.html` file, an empty `style.css` file, and a set of mocks (actually screenshots/captures) in the `mocks/` directory.  Your task is to fill out `style.css` so that your rendered `index.html` page matches the mocks as closely as possible.

A few important things to note about the design that may not be clear in the static mocks:

* The Google Fonts stylesheet for the font you should use (Roboto) is included in the HTML.

* The layout is responsive, in that columns are added and removed as the size of the browser viewport changes.  There should be a maximum of 3 columns.

* The location of the button to add a "twit" does not change relative to the viewport, even as the page is scrolled.

* The "active" navbar link (i.e. the link corresponding to the page currently being viewed) is highlighted with a small line underneath.

* There are several hover interactions on the page:

  * All links, including the navbar links and the name associated with each "twit" are highlighted in a blue-ish color when they're hovered over.  The search magnifying glass button has the same hover effect.

  * The button to add a "twit" is highlighted in blue and grows slightly on hover.

* The background of the search box changes when the box has focus.

Again, your goal is to match the mocks as closely as possible.  I'll show some tools in class that will help you do this.  Don't worry, however, if you don't get things like padding, margins, etc. exactly right.

One other thing to note is that the page incorporates several icons from the [Font Awesome icon library](https://fontawesome.com/icons?d=gallery).  This library is incorporated as a 3rd-party CSS file, and the icons are placed into the page using `<i>` elements whose HTML classes indicate which icon to display what icon style to use (e.g. `far`, `fas`, `fa-hand-lizard`, etc.).  It would be best not to use these classes to apply your own styles to the page. 
