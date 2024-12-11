function identifyAntennas(matrix) {
  const objects = {};

  matrix.forEach((row, x) => {
    row.forEach((val, y) => {
      if (val !== '.') {
        if (objects[val] === undefined) {
          objects[val] = [[x, y]];
        } else {
          const tempArr = objects[val];
          tempArr.push([x, y]);
          objects[val] = tempArr;
        }
      }
    });
  });

  return objects;
}

module.exports = {
  identifyAntennas,
}