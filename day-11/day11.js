function applyRules(input) {
  if (input === 0) {
    return 1;
  }
  return 0;
}

function parseInput(input) {
  return input.split(' ').map(Number);
}

module.exports = { parseInput, applyRules }