function calculateTotalOfOperableCommands(input) {
  const allOperableCommands = input.filter((val) => isOperable(val.output, val.values))

  const initialValue = 0;

  return allOperableCommands.reduce(
    (accumulator, currentValue) => accumulator + currentValue.output,
    initialValue,
  );
}

function parseFullInput(input) {
  const lines = input.split('\n');
  return lines.map((line) => parseInput(line));
}

function isOperable(target, values) {
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

  return options.includes(target);
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
  isOperable,
  parseFullInput,
  calculateTotalOfOperableCommands
}