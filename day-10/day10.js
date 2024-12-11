function _traverseSingleTrailhead(matrix, trailhead) {
  let count = 0;
  let currentVal = 0;

  const deltas = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
  ];

  let coords = [];
  const tempCoords = [];
  deltas.forEach((delta) => {
    const x = trailhead[0] + delta[0];
    const y = trailhead[1] + delta[1];
    const value = matrix[x]?.[y]

    if (value === currentVal + 1 && value !== undefined) {
      if (value + 1 === 9) {
        count++;
      }
      tempCoords.push([x, y]);
    }
  });
  coords = tempCoords;

  currentVal++;

  for (currentVal; currentVal < 10; currentVal++) {
    if (coords.length === 0) break;
    coords.forEach((coord) => {
      const tempCoords = [];
      deltas.forEach((delta) => {
        const x = coord[0] + delta[0];
        const y = coord[1] + delta[1];
        const value = matrix[x]?.[y]

        if (value === currentVal + 1 && value !== undefined) {
          if (value + 1 === 9) {
            count++;
          }
          tempCoords.push([x, y]);
        }
      });
      coords = tempCoords;
    });
  }

  return count;
}

function traverseTrailheads(matrix) {
  const trailheads = identifyTrailheads(matrix);

  let count = 0;

  trailheads.forEach((trailhead) => {
    count += _traverseSingleTrailhead(matrix, trailhead);
  });

  return count;
}

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

module.exports = { createMatrix, identifyTrailheads, traverseTrailheads }