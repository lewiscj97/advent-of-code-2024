function countXmas(matrix) {
  const count = _inVerticalLine(matrix) + _inHorizontalLine(matrix) + _reverseHorizontal(matrix);
  return count;
}

function _reverseHorizontal(matrix) {
  let count = 0;
  matrix.forEach((row, x) => {
    row.forEach((val, y) => {
      if (val === 'X') {
        if ('X' + matrix[x]?.[y-1] + matrix[x]?.[y-2] + matrix[x]?.[y-3] === 'XMAS') {
          count += 1;
        }
      }
    })
  });

  return count;
}

function _inVerticalLine(matrix) {
  let count = 0;
  matrix.forEach((row, x) => {
    row.forEach((val, y) => {
      if (val === 'X') {
        if ('X' + matrix[x+1]?.[y] + matrix[x+2]?.[y] + matrix[x+3]?.[y] === 'XMAS') {
          count += 1;
        }
      }
    });
  });

  return count;
}

function _inHorizontalLine(matrix) {
  let count = 0;
  matrix.forEach((row) => {
    for (let i = 0; i < row.length; i++) {
      const val = row[i];
      if (val === 'X') {
        if ('X' + row[i+1] + row[i+2] + row[i+3] === 'XMAS') {
          count += 1;
        }
      }
    }
  });

  return count;
}

function createMatrix(input) {
  const split = input.split('\n');
  const matrix = [];

  split.forEach((row) => {
    matrix.push(row.split(''));
  })

  return matrix;
}

module.exports = { createMatrix, countXmas, _inVerticalLine, _inHorizontalLine, _reverseHorizontal }