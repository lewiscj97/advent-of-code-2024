function createMatrix(input) {
  const split = input.split('\n');
  const matrix = [];

  split.forEach((row) => {
    matrix.push(row.split(''));
  })

  return matrix;
}

module.exports = { createMatrix }