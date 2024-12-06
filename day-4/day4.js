function countXmas(matrix) {
  const count = _inLine(matrix);
  return count;
}

function _inLine(matrix) {
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

module.exports = { createMatrix, countXmas }