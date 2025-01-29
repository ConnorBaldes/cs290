function circumference(r) {
  return 2 * Math.PI * r;
}

function area(r) {
  return Math.PI * r * r;
}

// module.exports = circumference;
// module.exports = "this is a string I am exporting";
module.exports = {
  circumference: circumference,
  area: area
};
