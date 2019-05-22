/* lev algorithm */
const lev = (oldString, newString) => {
  const oldLength = oldString.length;
  const newLength = newString.length;

  // need a matrix with width X and height Y,
  // where X = oldString.length + 1 and Y = newString.length + 1
  let distanceMatrix = Array(newLength + 1)
    .fill(null)
    .map(el => Array(oldLength + 1).fill(null));

  // filling in horizontal
  for (let i = 0; i <= oldLength; i++) {
    distanceMatrix[0][i] = i;
  }

  // filling in vertical
  for (let j = 0; j <= newLength; j++) {
    distanceMatrix[j][0] = j;
  }

  // fill in the matrix with levenshteinDistance of each distance
  let indicator;
  for (let i = 1; i <= newLength; i++) {
    for (let j = 1; j <= oldLength; j++) {
      indicator = oldString[j - 1] == newString[i - 1] ? 0 : 1;

      distanceMatrix[i][j] = Math.min(
        distanceMatrix[i - 1][j] + 1,
        distanceMatrix[i][j - 1] + 1,
        distanceMatrix[i - 1][j - 1] + indicator
      );
    }
  }
  console.log(distanceMatrix);
  return distanceMatrix[newLength][oldLength];
};

module.exports = lev;
