function isOperable(input) {
  const output = input.output;
  const values = input.values;

  let total;
  let operable = false;

  total = values[0] + values[1];

  if (total === output) {
    return true;
  }

  total = values[0] * values[1];

  if (total === output) {
    return true;
  }

  return operable;
}

function parseInput(input) {
  const split = input.split(': ')
  const output = parseInt(split[0]);

  const stringValues = split[1].split(' ');
  const values = stringValues.map((val) => parseInt(val));

  return {
    output,
    values
  }
}

module.exports = {
  parseInput,
  isOperable
}