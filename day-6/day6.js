// check what is in the cell directly in the direction of the guard
// move if they can

const { DIRECTIONS, MOVE_DELTAS, DIRECTIONS_INVERSE } = require('./constants');

function navigateMatrix(matrix) {
  let x = true;
  let count = 0;

  while (x === true) {
    const currentLocation = locateGuard(matrix);
    const nextLocation = identifyNextLocation(matrix, currentLocation);
    if (nextLocation === '.') {
      moveGuard(matrix, currentLocation);
      count++;
    }
    x = false; // obvs need to change
  }

  return count;
}

function moveGuard(matrix, currentLocation) {
  const {location: [x, y], direction} = currentLocation;
  const [deltaX, deltaY] = MOVE_DELTAS[direction];

  const newX = x + deltaX;
  const newY = y + deltaY;

  matrix[newX][newY] = DIRECTIONS_INVERSE[direction];
  matrix[x][y] = ".";

  return matrix;
}

function identifyNextLocation(matrix, currentLocation) {
  const {location: [x, y], direction} = currentLocation;
  const [deltaX, deltaY] = MOVE_DELTAS[direction];

  const newX = x + deltaX;
  const newY = y + deltaY;

  // Ensure new coordinates are within bounds
  if (newX >= 0 && newX < matrix.length && newY >= 0 && newY < matrix[0].length) {
    return matrix[newX][newY];
  }

  return null; // Return null if the new location is out of bounds
}

function locateGuard(matrix) {
  let location = {}
  matrix.forEach((row, x) => {
    row.forEach((value, y) => {
      if (value !== '.' && value !== '#') {
        location = {location: [x, y], direction: DIRECTIONS[value]}
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

module.exports = {
  createMatrix,
  locateGuard,
  identifyNextLocation,
  moveGuard,
  navigateMatrix
}