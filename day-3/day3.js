const regex = /mul\([0-9]{1,3},[0-9]{1,3}\)/g

function calculateTotalOfMulCommands(input) {
  const initialVal = 0;
  return input.reduce((accumulator, currentValue) => accumulator + calculateMulCommand(currentValue), initialVal);
}

function calculateMulCommand(command) {
  const values = command.replace('mul(', '').replace(')', '').split(',');
  const ints = values.map((val) => parseInt(val));
  return ints[0] * ints[1];
}

function extractCommands(input) {
  return input.match(regex);
}

module.exports = { extractCommands, calculateMulCommand, calculateTotalOfMulCommands }