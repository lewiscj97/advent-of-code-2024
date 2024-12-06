function countXmas(matrix) {
  const count = _inVerticalLine(matrix) + _inHorizontalLine(matrix) + _reverseHorizontal(matrix);
  return count;
}

const permutations = [
  // [0,1], 3
  // [0,-1], 2
  // [1,0], 1
  // [-1,0], 2
  [1,1],
  // [-1,1], 4
  [1,-1],
  [-1,-1]
]

function countXmasFunc(matrix, deltaX, deltaY) {
  let count = 0;
  matrix.forEach((row, x) => {
    row.forEach((val, y) => {
      if (val === 'X') {
        if ('X' + matrix[x + deltaX]?.[y + deltaY] + matrix[x + deltaX*2]?.[y + deltaY*2] + matrix[x + deltaX*3]?.[y+deltaY*3] === 'XMAS') {
          count += 1;
        }
      }
    })
  });

  return count;
}

function _diagonalDownLeft(matrix){
  return countXmasFunc(matrix, 1, 1);
}

function _diagonalUpLeft(matrix) {
  return countXmasFunc(matrix, -1, -1);
}

function _diagonalUpRight(matrix) {
  return countXmasFunc(matrix, -1, 1);
}

function _reverseVertical(matrix) {
  return countXmasFunc(matrix, -1, 0);
}

function _reverseHorizontal(matrix) {
  return countXmasFunc(matrix, 0, -1);
}

function _inVerticalLine(matrix) {
  return countXmasFunc(matrix, 1, 0);
}

function _inHorizontalLine(matrix) {
  return countXmasFunc(matrix, 0, 1);
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
  countXmas,
  _inVerticalLine,
  _inHorizontalLine,
  _reverseHorizontal,
  _reverseVertical,
  _diagonalUpRight,
  _diagonalUpLeft,
  _diagonalDownLeft
}