function findAntenodesSolution(input) {
  const values = Object.values(input);
  const antenodes = values.map((vals) => calculateAllAntenodes(vals)).flat();

  return Array.from(new Set(antenodes.map(JSON.stringify)), JSON.parse).length;
}

function calculateAllAntenodes(input) {
  const pairs = [];

  // find all combinations of coordinates
  for (let i = 0; i < input.length-1; i++) {
    for (let j = i; j < input.length-1; j++) {
      pairs.push([input[i], input[j+1]]);
    }
  }

  const antendodes = [];

  pairs.forEach((pair) => {
    antendodes.push(calculateAntenodes(pair));
  });

  return antendodes.flat().sort();
}

function calculateAntenodes(input) {
  const delta = [input[1][0] - input[0][0], input[1][1] - input[0][1]];
  const antenodes = [];

  antenodes.push([input[0][0] - delta[0], input[0][1] - delta[1]]);
  antenodes.push([input[1][0] + delta[0], input[1][1] + delta[1]]);

  const correctAntenodes = antenodes.filter((val) => val[0] >= 0 && val[1] >= 0 && val[0] <= 11 && val[1] <= 11);

  return correctAntenodes.sort();
}

function identifyAntennas(matrix) {
  const objects = {};

  matrix.forEach((row, x) => {
    row.forEach((val, y) => {
      if (val !== '.') {
        objects[val] = objects[val] || [];
        objects[val].push([x, y]);
      }
    });
  });

  return objects;
}

module.exports = {
  identifyAntennas,
  calculateAntenodes,
  calculateAllAntenodes,
  findAntenodesSolution
}