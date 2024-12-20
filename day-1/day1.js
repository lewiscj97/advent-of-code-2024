function processInput(input) {
  let left = [];
  let right = [];

  const split = input.split("\n");
  split.forEach((pair) => {
    const pairSplit = pair.split("   ");
    left.push(parseInt(pairSplit[0], 10));
    right.push(parseInt(pairSplit[1], 10));
  });

  left = left.sort();
  right = right.sort();

  return { left,right }
}

function calculateDistances(lists) {
  const listLength = lists.left.length;

  let totalDistance = 0;

  for (let i = 0; i < listLength; i++) {
    let leftVal = lists.left[i];
    let rightVal = lists.right[i];
    totalDistance += Math.abs(leftVal - rightVal);
  }

  return totalDistance;
}

function calculateSimilarityScore(lists) {
  const listLength = lists.left.length;

  let similarityScore = 0;

  for (let i = 0; i < listLength; i++) {
    const val = lists.left[i];
    let valCount = 0;

    lists.right.forEach((x) => x === val && valCount++);
    similarityScore += valCount * val;
  }

  return similarityScore;
}


module.exports = { processInput, calculateDistances, calculateSimilarityScore }
