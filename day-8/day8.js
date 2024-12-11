const { createMatrix } = require('../day-4/day4');

// Part 2

function finalSolutionPart2(input) {
  const matrix = createMatrix(input);
  const matrixSize = matrix[0].length - 1;
  const antennas = identifyAntennas(matrix);
  const values = Object.values(antennas);

  const antenodes = values.map((vals) => findAllAntenodesNewRules(vals, matrixSize)).flat();

  return Array.from(new Set(antenodes.map(JSON.stringify)), JSON.parse);
}

function findAllAntenodesNewRules(input, matrixSize) {
  return findAllAntenodesCommon(input, matrixSize, findAntenodesNewRules)
}

function calculateCoordsInGivenDirection(start, delta, multiplier, matrixSize) {
  let breaker = true;
  let i = 0;
  const antenodes = [];
  while (breaker === true) {
    const x = start[0] + delta[0] * multiplier * i;
    const y = start[1] + delta[1] * multiplier * i;

    if (x > matrixSize || x < 0 || y > matrixSize || y < 0) {
      breaker = false;
    } else {
      antenodes.push([x,y]);
      i++;
    }
  }
  return antenodes;
}

function findAntenodesNewRules(input, matrixSize) {
  const delta = [input[1][0] - input[0][0], input[1][1] - input[0][1]];

  return [
    ...calculateCoordsInGivenDirection(input[0], delta, -1, matrixSize),
    ...calculateCoordsInGivenDirection(input[1], delta, 1, matrixSize),
  ];
}

// Part 1
function findAntenodesSolution(input) {
  const matrix = createMatrix(input);
  const matrixSize = matrix[0].length - 1;
  const antennas = identifyAntennas(matrix);
  const values = Object.values(antennas);

  const antenodes = values.map((vals) => calculateAllAntenodes(vals, matrixSize)).flat();

  return Array.from(new Set(antenodes.map(JSON.stringify)), JSON.parse).length;
}

function calculateAllAntenodes(input, matrixLength) {
  return findAllAntenodesCommon(input, matrixLength, calculateAntenodes);
}

function calculateAntenodes(input, matrixSize) {
  const delta = [input[1][0] - input[0][0], input[1][1] - input[0][1]];
  const antenodes = [];

  antenodes.push([input[0][0] - delta[0], input[0][1] - delta[1]]);
  antenodes.push([input[1][0] + delta[0], input[1][1] + delta[1]]);

  const correctAntenodes = antenodes.filter((val) => val[0] >= 0 && val[1] >= 0 && val[0] <= matrixSize && val[1] <= matrixSize);

  return correctAntenodes.sort();
}

// common
function findAllAntenodesCommon(input, matrixSize, func) {
  const pairs = [];

  // find all combinations of coordinates
  for (let i = 0; i < input.length-1; i++) {
    for (let j = i; j < input.length-1; j++) {
      pairs.push([input[i], input[j+1]]);
    }
  }

  const antenodes = [];

  pairs.forEach((pair) => {
    antenodes.push(func(pair, matrixSize));
  });

  const flatAntenodes = antenodes.flat()

  return Array.from(new Set(flatAntenodes.map(JSON.stringify)), JSON.parse);
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
  findAntenodesNewRules,
  findAllAntenodesNewRules,
  finalSolutionPart2
}