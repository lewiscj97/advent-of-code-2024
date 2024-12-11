const { createMatrix } = require("../day-4/day4");

function findAntenodesNewRules(input, matrixSize) {
  const delta = [input[1][0] - input[0][0], input[1][1] - input[0][1]];

  const xValues = [];
  const yValues = [];

  for (let i = 0; input[0][0] - delta[0]*i >= 0; i++) {
    xValues.push([input[0][0] - delta[0]*i, input[0][1] - delta[1]*i]);
  }

  for (let j = 0; input[1][1] + delta[1]*j <= matrixSize; j++) {
    yValues.push([input[1][0] + delta[0]*j, input[1][1] + delta[1]*j])
  }

  const antenodes = xValues.concat(yValues);

  return antenodes.sort();
}

function findAntenodesSolution(input) {
  const matrix = createMatrix(input);
  const matrixSize = matrix[0].length - 1;
  const antennas = identifyAntennas(matrix);
  const values = Object.values(antennas);

  const antenodes = values.map((vals) => calculateAllAntenodes(vals, matrixSize)).flat();

  return Array.from(new Set(antenodes.map(JSON.stringify)), JSON.parse).length;
}

function calculateAllAntenodes(input, matrixLength) {
  const pairs = [];

  // find all combinations of coordinates
  for (let i = 0; i < input.length-1; i++) {
    for (let j = i; j < input.length-1; j++) {
      pairs.push([input[i], input[j+1]]);
    }
  }

  const antendodes = [];

  pairs.forEach((pair) => {
    antendodes.push(calculateAntenodes(pair, matrixLength));
  });

  return antendodes.flat().sort();
}

function calculateAntenodes(input, matrixSize) {
  const delta = [input[1][0] - input[0][0], input[1][1] - input[0][1]];
  const antenodes = [];

  antenodes.push([input[0][0] - delta[0], input[0][1] - delta[1]]);
  antenodes.push([input[1][0] + delta[0], input[1][1] + delta[1]]);

  const correctAntenodes = antenodes.filter((val) => val[0] >= 0 && val[1] >= 0 && val[0] <= matrixSize && val[1] <= matrixSize);

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
  findAntenodesSolution,
  findAntenodesNewRules
}