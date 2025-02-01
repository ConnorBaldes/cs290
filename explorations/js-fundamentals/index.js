console.log("Hello world!");

var x = 16;
console.log("== typeof(x):", typeof(x));

x = "some string";
console.log("== typeof(x):", typeof(x));

console.log("\n========================");
console.log("== Numbers");
console.log("========================");

var y = 16.128;
console.log("== typeof(y):", typeof(y));

console.log("== 9 / 5:", 9 / 5);

console.log("\n========================");
console.log("== Comparisons");
console.log("========================");

console.log("== 2 == 2:", 2 == 2);
console.log("== 2 == 3:", 2 == 3);
console.log("== 2 == '2':", 2 == '2');
console.log("== 2 == 2.0:", 2 == 2.0);
console.log("== 2 == '2.0':", 2 == '2.0');

console.log("== 2 === '2':", 2 === '2');
console.log("== 2 === 2.0:", 2 === 2.0);
console.log("== 2 === '2.0':", 2 === '2.0');
console.log("== 2 !== 3:", 2 !== 3);

console.log("== 2 < 3:", 2 < 3);
console.log("== 2 <= 3:", 2 <= 3);

console.log("\n========================");
console.log("== Strings");
console.log("========================");

var str1 = "This is a string.";
var str2 = 'This is also a string.';
var str3 = 'This is a "string inside a string".';

var longerString = str1 + str2;
console.log("== longerString:", longerString);
console.log("== longerString + 1234:", longerString + 1234);
var anotherStr = str1 + 5678;
console.log("== anotherStr:", anotherStr);

console.log("== str1.length:", str1.length);
console.log("== str1[5]:", str1[5]);
str1[5] = 'x';
console.log("== str1:", str1);

console.log("== 'decathlon'.indexOf('cat'):", 'decathlon'.indexOf('cat'));
console.log("== 'team'.indexOf('i'):", 'team'.indexOf('i'));

var foxString = "The quick brown fox jumped over the lazy cat.";
console.log("== foxString.replace('cat', 'dog'):", foxString.replace('cat', 'dog'));
console.log("== foxString:", foxString);

console.log("\n========================");
console.log("== Arrays");
console.log("========================");

var array = [ 1, '2', [ 5, 6, 7 ], function () {} ];
console.log("== array:", array);
console.log("== array.length:", array.length);
for (var i = 0; i < array.length; i++) {
  console.log(" --", array[i]);
}

function arrayElementPrintingFunction(k) {
  console.log("== The array element is:", k);
}

array.forEach(function (elem) {
  // console.log("== This is printed once for each thing in array");
  console.log(" -- elem:", elem);
});
array.forEach(arrayElementPrintingFunction);

console.log("\n========================");
console.log("== Functions");
console.log("========================");

function addMyArguments(a, b, c) {
  var result = a + b + c;
  if (arguments[3]) {
    result += arguments[3];
  }
  return result;
}

console.log("== addMyArguments(2, 4, 6):", addMyArguments(2, 4, 6));
console.log("== addMyArguments('2', '4', '6'):", addMyArguments('2', '4', '6'));
console.log("== addMyArguments(2, 4, '6'):", addMyArguments(2, 4, '6'));

console.log("== addMyArguments('2', '4'):", addMyArguments('2', '4'));
console.log("== addMyArguments('2', '4', '6', '8'):", addMyArguments('2', '4', '6', '8'));

var z = 16;
function foo() {
  z = 32;
}
foo();
console.log("== z:", z);

console.log("\n========================");
console.log("== Objects");
console.log("========================");

// var person = {
//   "firstName": "Luke",
//   "lastName": "Skywalker"
// };
var person = {
  firstName: "Luke",
  lastName: "Skywalker",
  movies: [ 3, 4, 5, 6, 7, 8, 9 ],
  lightSaber: {
    color: "blue",
    length: 3
  },
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  }
};
console.log("== person:", person);
console.log("== person['firstName']:", person['firstName']);
console.log("== person.firstName:", person.firstName);
console.log("== person.getFullName():", person.getFullName());
