function validateReports(input) {
  const reports = input.split('\n');
  let initialVal = 0;

  initialVal += reports.filter(validateReport).length;

  return initialVal;
}

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
    const isAscendOrDescend = check(next, current); // naming
    results.push({ diff, isAscendOrDescend });
  }

  let ascendCount = 0;
  let descendCount = 0;

  results.forEach((result) => {
    if (result.isAscendOrDescend) {
      ascendCount += 1;
    } else {
      descendCount += 1;
    }
  });

  if (descendCount === 1) {
    results = results.filter((val) => val.isAscendOrDescend)
  }

  if (ascendCount === 1) {
    results = results.filter((val) => !val.isAscendOrDescend)
  }

  const set = new Set(results.map((val) => val.diff));
  const isChangingConsistently = results.every((val) => val.isAscendOrDescend === true);
  const isChangingAcceptably = [...set].every((val) => val > 0 && val < 4)
  return isChangingConsistently && isChangingAcceptably;
}

module.exports = { validateReport, validateReports }
