function createMatrix(input) {
  const rows = input.split('\n');
  return rows.map((row) => row.split(''));
}

function identifyValuesAndLocations(matrix) {
  const valuesAndLocations = {};
  matrix.forEach((row, x) => {
    row.forEach((val, y) => {
      if (valuesAndLocations?.[val] !== undefined) {
        valuesAndLocations[val].push([x, y]);
      } else {
        valuesAndLocations[val] = [[x,y]];
      }
    });
  });
  return valuesAndLocations;
}

module.exports = {
  createMatrix,
  identifyValuesAndLocations,
}