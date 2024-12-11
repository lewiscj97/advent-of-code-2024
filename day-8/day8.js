function calculateAntenodes(input) {
  const delta = [input[1][0] - input[0][0], input[1][1] - input[0][1]];
  const antenodes = [];

  antenodes.push([input[0][0] - delta[0], input[0][1] - delta[1]]);
  antenodes.push([input[1][0] + delta[0], input[1][1] + delta[1]]);

  const correctAntenodes = antenodes.filter((val) => val[0] >= 0 && val[1] >= 0);

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
  calculateAntenodes
}