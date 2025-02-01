var fs = require('fs');

var startTime = new Date();
var endTime;
fs.readFile('hello.js', 'utf8', function (err, fileContents) {
  if (err) {
    console.log("== Error reading file:", err);
  } else {
    console.log("== Async file contents:", fileContents);
    endTime = new Date();
  }
});
console.log("== This is after fs.readFile() #1");
console.log("== This is after fs.readFile() #2");
console.log("== This is after fs.readFile() #3");
console.log("== This is after fs.readFile() #4");

var syncFileContents = fs.readFileSync('hello.js', 'utf8');
console.log("== Synchronous file contents:", syncFileContents);
