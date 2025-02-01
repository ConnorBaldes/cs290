console.log("Hello, world!");

/* process */
console.log("== process.env.SOME_ENV_VARIABLE:", process.env.SOME_ENV_VARIABLE);

// var circumference = require('./circle');
// console.log("== circumference:", circumference);
// console.log("== circumference(5):", circumference(5));

var circle = require('./lib/circle');
console.log("== circle:", circle);
console.log("== circle.circumference(5):", circle.circumference(5));
console.log("== circle.area(5):", circle.area(5));


var figlet = require('figlet');
/*
 * (err, data) => { console.log(data); }
 */
figlet("Hello CS 290!!", function (err, data) {
  if (!err) {
    console.log(data);
  }
});
