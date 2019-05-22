# Levenshtein Distance algorithm in Javascript

Useful to find minimum distance between two given strings.

# Usage

```
const lev = require("./levenshtein.js");

const newString = "gambol";
const oldString = "gumbo";

console.log(lev(oldString, newString)); //returns 2
```

# Resources

For more info on Levenshtein distance:

- [Minimum edit distance dynamic programming](https://www.youtube.com/watch?v=We3YDTzNXEk)
- [Minimum Edit Distance - Explained ! - Stanford University](https://www.youtube.com/watch?v=Xxx0b7djCrs)
- [Levenshtein Distance GH](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/string/levenshtein-distance)
