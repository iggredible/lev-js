const lev = require("./levenshtein.js");

const newString = "gambol";
const oldString = "gumbo";

console.log(lev(oldString, newString));
