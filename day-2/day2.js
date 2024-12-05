function validateReport(input) {
  const values = input.split(' ').map((val) => parseInt(val));
  return _checkReport(values, _isAscending) || _checkReport(values, _isDescending);
}

function _isAscending(next, current) {
  return next > current;
}

function _isDescending(next, current) {
  return next < current;
}

function _checkReport(values, check) {
  let results = [];

  for (let i = 0; i < values.length - 1; i++) {
    const current = values[i];
    const next = values[i + 1];
    const diff = Math.abs(next - current);
    const isChanging = check(next, current); // naming
    const map = { diff, isChanging }
    results.push(map);
  }

  const isChanging = results.every((val) => val.isChanging === true);
  const set = new Set(results.map((val) => val.diff));
  const isConstantDifference = set.values().next().value > 0 && set.values().next().value < 4;

  return isChanging && isConstantDifference;
}

module.exports = { validateReport }
