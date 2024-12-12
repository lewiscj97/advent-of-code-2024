function calculatePerimeter(input, value, matrix) {
  let perimeter = 0;
  for (let i = 0; i < input.length; i++) {
    const coord = input[i];
    let coordinatePerimeterCount = 0;
    const adjacentCells = [];
    const directions = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ]
    // up
    adjacentCells.push(matrix[coord[0]-1]?.[coord[1]]);
    // down
    adjacentCells.push(matrix[coord[0]+1]?.[coord[1]]);
    // left
    adjacentCells.push(matrix[coord[0]]?.[coord[1]-1]);
    // right
    adjacentCells.push(matrix[coord[0]]?.[coord[1]+1]);

    adjacentCells.forEach((val) => {
      if (val === undefined) {
        return coordinatePerimeterCount++;
      }
      if (val === value) {
        // do nothing
      }
      if (val !== value) {
        return  coordinatePerimeterCount++;
      }
    });

    perimeter += coordinatePerimeterCount;
  }
  return perimeter;
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

function createMatrix(input) {
  const rows = input.split('\n');
  return rows.map((row) => row.split(''));
}

module.exports = {
  createMatrix,
  identifyValuesAndLocations,
  calculatePerimeter
}
