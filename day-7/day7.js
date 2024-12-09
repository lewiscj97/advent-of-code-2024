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
  parseInput
}