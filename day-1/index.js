function processInput(input) {
  const left = [];
  const right = [];

  const split = input.split("\n");
  split.forEach((pair) => {
    const pairSplit = pair.split("   ");
    left.push(parseInt(pairSplit[0], 10));
    right.push(parseInt(pairSplit[1], 10));
  });

  return { left,right }
}

module.exports = { processInput }
