function isInputOrdered(sanitisedRules, input) {
  return true;
}

function sanitiseInput(input) {
  const rows = input.split('\n');
  const sanitisedRows = [];
  rows.forEach((row) => {
    sanitisedRows.push(row.split(',').map((val) => parseInt(val)));
  });
  return sanitisedRows;
}

function sanitiseRules(rules) {
  const rows = rules.split('\n');
  const sanitisedRules = [];
  rows.forEach((row) => {
    const splitRow = row.split('|');
    sanitisedRules.push([parseInt(splitRow[0]), parseInt(splitRow[1])])
  });
  return sanitisedRules;
}

module.exports = { sanitiseRules, sanitiseInput, isInputOrdered }