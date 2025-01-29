/*
 * Write your routing code in this file.  Make sure to add your name and
 * @oregonstate.edu email address below.
 *
 * Name: 
 * Email: 
 */

var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var twitData = require('./twitData');


var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', function (req, res) {
  //res.status(200).sendFile(path.join(__dirname, 'public', 'index.html'));

  res.status(200).render('index', { allTwits: twitData});

});

app.get('/index', function (req, res) {
  //res.status(200).sendFile(path.join(__dirname, 'public', 'index.html'));
  res.status(200).render('index', { allTwits: twitData});
});

app.get('/twit/:index', function (req, res) {
  
  var number = req.params.index;


  if(number >= 0 && number <= twitData.length-1) {
    var Twit = twitData[number];
    allTwits = [Twit];

    res.status(200).render('twit', {allTwits});
  }else {
    res.status(404).render('404');
  }
});

app.get('*', function (req, res) {
  res.status(404).render('404');
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
