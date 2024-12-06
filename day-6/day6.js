// check what is in the cell directly in the direction of the guard
// move if they can

const DIRECTIONS = {
  '^': 'UP',
  '>': 'RIGHT',
  '<': 'LEFT',
  'v': 'DOWN',
};

function locateGuard(matrix) {
  let location = {}
  matrix.forEach((row, x) => {
    row.forEach((value, y) => {
      if (value !== '.' && value !== '#') {
        location = { location: [x, y], direction: DIRECTIONS[value] }
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