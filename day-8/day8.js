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
}