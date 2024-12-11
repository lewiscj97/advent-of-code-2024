function createMatrix(input) {
  const rows = input.split('\n');
  const rowsSplit = rows.map((row) => row.split(''));
  return rowsSplit.map((row) => {
    return row.map(Number)
  });
}

module.exports = { createMatrix }