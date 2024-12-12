function createMatrix(input) {
  const rows = input.split('\n');
  return rows.map((row) => row.split(''));
}

module.exports = {
  createMatrix,
}