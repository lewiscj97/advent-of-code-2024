function blinkTimes(input, times) {
  let runningCount = input;
  for (let x = 0; x < times; x++) {
    runningCount = blink(runningCount);
  }
  return runningCount;
}

function blink(input) {
  const array = parseInput(input);
  return array.map(applyRules).flat().join(' ');
}

function applyRules(input) {
  if (input === 0) {
    return 1;
  }

  const inputLength = input.toString().length;
  if (inputLength % 2 === 0) {
    const first = input.toString().slice(0, inputLength / 2);
    const second = input.toString().slice(inputLength / 2);
    return [parseInt(first), parseInt(second)];
  }

  return 2024 * input;
}

function parseInput(input) {
  return input.split(' ').map(Number);
}

module.exports = { parseInput, applyRules, blink, blinkTimes }
