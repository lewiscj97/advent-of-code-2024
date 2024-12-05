function validateReport(input) {
  const values = input.split(' ').map((val) => parseInt(val));

  let results = [];

  for (let i = 0; i < values.length - 1; i++) {
    const current = values[i];
    const next = values[i + 1];
    const diff = Math.abs(next - current);
    const isAscending = next > current;
    const map = { diff, isAscending }
    results.push(map);
  }

  const isAscending = results.every((val) => val.isAscending === true);
  const set = new Set(results.map((val) => val.diff));
  const isConstantAllowedIncrease = set.size === 1 && set.values().next().value > 0 && set.values().next().value < 4;

  return isAscending && isConstantAllowedIncrease;
}

module.exports = { validateReport }
