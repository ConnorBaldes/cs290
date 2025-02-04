# Express Serving and Handlebars Templating

The goal of this assignment is to start working with Handlebars and Express.  The code that's currently in this repo implements a site that's served completely statically.  Specifically, there is a directory `public/` that contains a number of static files that are served by a simple Express server in `server.js`.  Your job in this assignment is to templatize this existing site.  Specifically, you must complete the following tasks:

## 1. Implement a twit template and use it on the client side

When the user adds a new twit using the "create twit" button in the current site, the client-side code in `index.js` calls a function `insertNewTwit()`, which uses native JS methods to construct a DOM element representing a new twit based on data passed as arguments to the function and inserts that new twit element into the DOM at the appropriate location.

Your first task in this assignment is to write a Handlebars template to represent a single twit and then to use that template in `insertNewTwit()` instead of the native JS methods currently used to create a new twit and insert it into the DOM.  Here are some specific things you'll have to do to make this happen:

  * Implement your twit template in its own `.handlebars` file.  You'll use this template in later steps, too.

  * Add to your `package.json` file a new build script that uses `handlebars` to pre-compile your twit template into a JS file.  Note that you'll need to install `handlebars` as a dependency of your package in order to do this pre-compilation.  Make sure your server process in `server.js` serves this generated JS file, and make sure to hook your build script up so it's run every time you use `npm start` to start the server, just in case you change your template.

  * Make sure your client-side HTML code includes your generated JS script for the twit template.  Also make sure your client-side HTML code includes the [Handlebars runtime library](https://cdnjs.com/libraries/handlebars.js), so it can actually use your template.

  * Replace the native JS function calls currently used in `insertNewTwit()` to build and insert a new twit element with a call to your twit template function, making sure to pass the appropriate arguments into the twit template function.  Note that your twit template function will generate an HTML string, not a DOM element, so you'll have to use a slightly different approach to insert the new twit into the DOM.

## 2. Templatize the twits page to replace `index.html`

The current site uses a hard-coded page in `index.html` to display a page containing 8 twits.  Your next task in the assignment is to implement a templatized version of this twits page, and to use data stored on the server side to dynamically generate the twits page when a client requests it.  Specifically, you are provided with raw data in `twitData.json` representing the current set of 8 twits.  You should use that data in conjunction with a set of templates you write to replace the functionality `index.html`.  Here are some specific things you'll have to do to make this happen:

  * Implement one or more `.handlebars` template files to replicate the structure of `index.html`.
    * Your new set of templates can use a layout template if you'd like.  This isn't strictly necessary here, but you'll have to do it eventually to earn full credit for the assignment.

  * In these new templates, instead of hard-coding the twits to be displayed, use the twit template you created in step 1 as a partial to render each twit in an array of twits that's passed as a template argument.

  * In your server process in `server.js`, set up your Express server to use `express-handlebars` as the view engine.  Note that you'll need to install `express-handlebars` as a dependency of your package.

  * Implement a route in your server process for the root path `/`.  Make sure this route's middleware is called before the middleware function that serves `index.html`.  Within this new route, you should respond to the client by using your newly-created template(s) to render the twits page (which should look the same as `index.html`).  In particular, make sure you load the raw twit data from `twitData.json` and pass all of this twit data into your template(s) using the appropriate template argument(s).  When you render the twits page this way, make sure to respond with status 200.

  * Delete `index.html` (or move it somewhere outside of the `public/` directory).  After you've got your templates in place for this part of the assignment, you won't need `index.html` anymore, and you'll want to make sure your site is actually using your templates and not `index.html` to render the site.  The best way to do that is to get rid of `index.html`.

## 3. Templatize the 404 page

The current site contains a route in the server process in `server.js` that responds with a 404 status and an error page hard-coded in `404.html` whenever a client requests an unknown path.  Your next task for the assignment is to turn this 404 page into a template.

There are two ways to do this.  The "easy" way is just to basically copy `404.html` into a new Handlebars template, e.g. `404.handlebars`.  However, if you do this, you'll notice that there is a lot of duplicated code between your 404 template and your twits page template.  To earn full credit, you must templatize all of the elements that are common to both pages and re-use those templates whenever those elements need to be rendered.  Specifically, here are some of the things you'll need to do to accomplish this:

  * Write a layout template that contains the HTML skeleton that's common to both the 404 page and the twits page.  Make sure all of the needed CSS and client-side JS is included in this layout template.  Also make sure you set your server process up to use this layout template.  Remove this HTML skeleton from the 404 and twits page templates, and allow it to be provided via your new layout template.

  * Write a partial representing each of the visual elements that are common to both the 404 page and the twits page, e.g. the page header.  Use these partials to render these elements in each page.  You can go even further than this if you like, writing and using a partial for each discrete "component" in the site, e.g. the create twit button/modal, but this is not necessary.

  * Again, after you get all of this hooked up, you should delete (or move) `404.html` to make sure your site is correctly using your new templates.

## 4. Implement a page to render a single twit

Finally, use the twit template you implemented in step 1 to create a new route that displays a single twit.  This route should behave as follows:

  * When a client requests a path of the form `/twits/<n>`, where `<n>` is an integer that is within the bounds of the array of twits stored in `twitData.json` (i.e. `<n>` is between 0 and 7), you should respond with a page that contains only the corresponding twit.  If `<n>` is not within the bounds of the array of twits, or if it's not an integer, you should respond with a 404 status and the 404 page you implemented in step 3.

  * Your single-twit page should contain only the site header and the individual twit that was requested, the following things should **not** be displayed or even present in the DOM:
    * Any twits other than the one that was requested.
    * The "create twit" button.
    * The "create twit" modal and its backdrop.

  * For full credit, you should use the same template to render both your root path `/` and the `/twits/<n>` path.  You can still earn partial credit by implementing separate templates for each of these paths.
