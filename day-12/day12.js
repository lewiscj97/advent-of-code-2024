function identifyValuesAndLocations(matrix) {
  const groups = [];
  const visited = new Set();

  const directions = [
    [0, 1], // right
    [1, 0], // down
    [0, -1], // left
    [-1, 0], // up
  ];

  function dfs(x, y, value, group) {
    const key = `${x},${y}`;
    if (
      x < 0 ||
      y < 0 ||
      x >= matrix.length ||
      y >= matrix[0].length ||
      visited.has(key) ||
      matrix[x][y] !== value
    ) {
      return;
    }

    visited.add(key);
    group.push([x, y]);

    for (const [dx, dy] of directions) {
      dfs(x + dx, y + dy, value, group);
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const key = `${i},${j}`;
      if (!visited.has(key)) {
        const value = matrix[i][j];
        const group = [];
        dfs(i, j, value, group);
        groups.push([value, ...group]);
      }
    }
  }

  return groups;
}

function calculateCost(matrix) {
  let cost = 0;

  const valuesAndLocations = identifyValuesAndLocations(matrix);
  const allPerimeters = calculateAllPerimeters(valuesAndLocations, matrix);

  const values = valuesAndLocations.map((set) => set[0]);

  for (let i = 0; i < values.length; i++) {
    const area = valuesAndLocations[i].slice(1).length;
    const perimeter = allPerimeters[i][1];
    cost += area * perimeter;
  }

  return cost;
}

function calculateAllPerimeters(input, matrix) {
  const perimeters = [];

  input.forEach((set) => {
    const value = set[0];
    const coords = set.slice(1);
    perimeters.push([value, calculatePerimeter(coords, value, matrix)]);
  });

  return perimeters;
}

function calculatePerimeter(input, value, matrix) {
  let perimeter = 0;
  for (let i = 0; i < input.length; i++) {
    const coord = input[i];
    let coordinatePerimeterCount = 0;
    const adjacentCells = [];
    const directions = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ]
    // up
    adjacentCells.push(matrix[coord[0] - 1]?.[coord[1]]);
    // down
    adjacentCells.push(matrix[coord[0] + 1]?.[coord[1]]);
    // left
    adjacentCells.push(matrix[coord[0]]?.[coord[1] - 1]);
    // right
    adjacentCells.push(matrix[coord[0]]?.[coord[1] + 1]);

    adjacentCells.forEach((val) => {
      if (val === undefined) {
        return coordinatePerimeterCount++;
      }
      if (val === value) {
        // do nothing
      }
      if (val !== value) {
        return coordinatePerimeterCount++;
      }
    });

    perimeter += coordinatePerimeterCount;
  }
  return perimeter;
}

function createMatrix(input) {
  const rows = input.split('\n');
  return rows.map((row) => row.split(''));
}

module.exports = {
  createMatrix,
  identifyValuesAndLocations,
  calculatePerimeter,
  calculateAllPerimeters,
  calculateCost,
}
