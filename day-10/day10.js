function identifyTrailheads(input) {
  const trailheadCoords = [];

  input.forEach((row, x) => {
    row.forEach((val, y) => {
      if (val === 0) trailheadCoords.push([x, y]);
    });
  });

  return trailheadCoords;
}

function createMatrix(input) {
  const rows = input.split('\n');
  const rowsSplit = rows.map((row) => row.split(''));
  return rowsSplit.map((row) => {
    return row.map(Number)
  });
}

module.exports = { createMatrix, identifyTrailheads }