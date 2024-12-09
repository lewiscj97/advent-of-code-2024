function isOperable(input) {
  const output = input.output;
  const values = input.values;

  let options = [];

  // 2 vals
  options.push(values[0] + values[1]);
  options.push(values[0] * values[1]);

  for (let i = 2; i < values.length; i++) {
    const currentOptionsLength = options.length;
    for (let j = 0; j < currentOptionsLength; j++) {
      options.push(options[j] + values[i]);
      options.push(options[j] * values[i]);
    }
  }

  return options.includes(output);
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