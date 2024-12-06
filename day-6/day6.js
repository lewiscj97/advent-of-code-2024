// Need to find the location of the guard in the matrix
// need to identify direction of travel
// check what is in the cell directly in the direction of the guard
// move if they can

function locateGuard(matrix) {
  let location = {}
  matrix.forEach((row, x) => {
    row.forEach((value, y) => {
      if (value !== '.' && value !== '#') {
        let direction;
        if (value === '^') {
          direction = 'UP';
        }
        if (value === '>') {
          direction = 'RIGHT';
        }
        if (value === '<') {
          direction = 'LEFT';
        }
        if (value === 'v') {
          direction = 'DOWN';
        }
        location = { location: [x, y], direction }
      }
    });
  });

  return location;
}

function createMatrix(input) {
  const split = input.split('\n');
  const matrix = [];

  split.forEach((row) => {
    matrix.push(row.split(''));
  })

  return matrix;
}

module.exports = { createMatrix, locateGuard }