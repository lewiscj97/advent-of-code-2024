function isOperable(input) {
  const output = input.output;
  const values = input.values;

  let options = [];

  // 2 vals
  options.push(values[0] + values[1]);
  options.push(values[0] * values[1]);

  // 3 vals
  options.push(options[0] + values[2]);
  options.push(options[0] * values[2]);
  options.push(options[1] + values[2]);
  options.push(options[1] * values[2]);

  // 4 vals
  options.push(options[0] + values[3]);
  options.push(options[0] * values[3]);
  options.push(options[1] + values[3]);
  options.push(options[1] * values[3]);
  options.push(options[2] + values[3]);
  options.push(options[2] * values[3]);
  options.push(options[3] + values[3]);
  options.push(options[3] * values[3]);

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