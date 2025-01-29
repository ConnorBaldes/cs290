var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var fs = require('fs');

var app = express();
var port = process.env.PORT || 3000;

var playerData = require('./players');

//const sgMail = require('@sendgrid/mail');
var bodyParser = require('body-parser');
app.use(bodyParser.json());


app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', function (req, res) {
  //res.status(200).sendFile(path.join(__dirname, 'public', 'index.html'));
  res.status(200).render('home', {
    displayTitle: false
  });
});

app.get('/home', function (req, res) {
  res.status(200).render('home', {
    displayTitle: false
  });
});

app.get('/contact', function(req, res, next) {

  console.log("contact was requested.");
  res.status(200).render('contact', {
    pageTitle: 'Get Involved!',
    displayTitle: true
  });
});

app.post('/sendForm', function(req, res, next) {

  console.log("Sending form...");
  if (req.body && req.body.name && req.body.email && req.body.message) {
    console.log("==Name: ", req.body.name);
    console.log("==Email: ", req.body.email);
    console.log("==Message: ", req.body.message);

    res.status(200).send("Your information was saved.");

    fs.appendFile('formSubmissions.json', req.body.name + "\n", function(err) {
      if (err) {
        return console.log(err);
      }
      console.log(req.body.name);
    });

    fs.appendFile('formSubmissions.json', req.body.email + "\n", function(err) {
      if (err) {
        return console.log(err);
      }
      console.log(req.body.email);
    });

    fs.appendFile('formSubmissions.json', req.body.message + "\n", function(err) {
      if (err) {
        return console.log(err);
      }
      console.log(req.body.message);
    });
  }
  else {
    res.status(400).send("You must fill out all fields.");
  }
  
})

app.post('/addevent/:team', function(req, res, next) {
  //post fn for the calendar stuff
  var teamName = req.params.team;
  const {google} = require('googleapis');
  const {OAuth2} = google.auth;
  const oAuth2Client = new OAuth2('763396554327-lbgh5eqt02b2pg1oonbovaogq48utkoq.apps.googleusercontent.com','Nc5nIetzjluS5LCfVIQRZFvQ')
  oAuth2Client.setCredentials({refresh_token: '1//04Z0Wmz4tAgnLCgYIARAAGAQSNwF-L9IrN2NuB73GNs8Rz7uUinHRIJY-r51aCqK2OV_a3vZ9k-eSSa0PXnSQGREBQJ23kEvfTiY'})
  const calendar = google.calendar({version: 'v3', auth: oAuth2Client})

  // times for Denver game
  const denverStartTime = new Date();
  denverStartTime.setDate(15);
  denverStartTime.setMonth(5);
  denverStartTime.setTime(1592262000000);
  
  const denverEndTime = new Date();
  denverEndTime.setDate(15);
  denverEndTime.setMonth(5);
  denverEndTime.setTime(1592267400000);

  // times for Maryland game
  const marylandStartTime = new Date();
  marylandStartTime.setDate(18);
  marylandStartTime.setMonth(5);
  marylandStartTime.setTime(1592521200000);
  
  const marylandEndTime = new Date();
  marylandEndTime.setDate(18);
  marylandEndTime.setMonth(5);
  marylandEndTime.setTime(1592526600000);

  // times for Johns Hopkins game
  const jhStartTime = new Date();
  jhStartTime.setDate(23);
  jhStartTime.setMonth(5);
  jhStartTime.setTime(1592953200000);
  
  const jhEndTime = new Date();
  jhEndTime.setDate(23);
  jhEndTime.setMonth(5);
  jhEndTime.setTime(1592958600000);

  // array of all three games
  const allGames = [
    denver = {
      name: "denver",
      summary: "Game @ Denver",
      location: "Denver, CO",
      description: "Lacrosse game against Denver",
      start: {
        dateTime: denverStartTime,
        timeZone: 'America/Denver'
      },
      end: {
        dateTime: denverEndTime,
        timeZone: 'America/Denver'
      },
      colorId: 5
    }, 
    maryland = {
      name: "maryland",
      summary: "Game @ Maryland",
      description: "Lacrosse game against Denver",
      location: "College Park, MD",
      start: {
        dateTime: marylandStartTime,
        timeZone: 'America/Denver'
      },
      end: {
        dateTime: marylandEndTime,
        timeZone: 'America/Denver'
      },
      colorId: 5
    }, 
    jh = {
      name: "jh",
      summary: "Game @ Johns Hopkins",
      description: "Lacrosse game against Denver",
      location: "Baltimore, MD",
      start: {
        dateTime: jhStartTime,
        timeZone: 'America/Denver'
      },
      end: {
        dateTime: jhEndTime,
        timeZone: 'America/Denver'
      },
      colorId: 5
    }, 
  ]
  
  var index = -1;
  for (var i = 0; i < allGames.length; i++) {
    if (allGames[i].name === teamName) {
      index = i;
      break;
    }
  }
  if (index === -1) {
    return console.error('not a team name');
  }

  return calendar.events.insert({calendarId: 'primary', resource: allGames[index]}, err => {
    if (err) {
      return console.error('Failed')
    }
    return console.log('successful')
  })                                                                         

})


app.get('/roster', function(req, res, next) {
  res.status(200).render('roster', playerData);
  /*
  res.status(200).render('roster', {
    pageTitle: 'Team Roster',
    displayTitle: true
  });
  */
});

app.get('/learnmore', function(req, res, next) {
  res.status(200).render('learnmore', {
    pageTitle: 'Learn More',
    displayTitle: true
  });
});

app.get('/schedule', function(req, res, next) {
  res.status(200).render('schedule', {
    pageTitle: '2020 Schedule',
    displayTitle: true
  });
});

app.get('*', function(req, res) {
   res.status(404).render('404');
});	
  // add 404 handlebars file
  //res.status(404).render()

app.listen(port, function () {
    console.log("== Server is listening on port", port);
  });
