function getIncorrectlyOrderedInputs(rules, input) {
  return input.filter((x) => !isInputOrdered(rules, x));
}

function getSumOfValidMiddlePageInputs(rules, input) {
  let sum = 0;

  const validValues = input.filter((x) => isInputOrdered(rules, x));
  validValues.forEach((val) => {
    sum += _getMiddleValue(val);
  });

  return sum;
}

function isInputOrdered(rules, input) {
  let valid = true;

  input.forEach((value) => {
    // go through the rules and check if other values are contained
    const relatedRules = [];
    rules.forEach((rule) => {
      const otherVal = rule.find((val) => val !== value);
      if (input.includes(otherVal)) {
        relatedRules.push(rule);
      }
    });

    relatedRules.forEach((rule) => {
      if (rule[0] === value && input.indexOf(rule[1]) < input.indexOf(value)) {
        valid = false;
      }

      if (rule[1] === value && input.indexOf(rule[0]) > input.indexOf(value)) {
        valid = false;
      }
    });
  });

  return valid;
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

function _getMiddleValue(array) {
  return array[Math.round((array.length - 1) / 2)]
}

module.exports = {
  sanitiseRules,
  sanitiseInput,
  isInputOrdered,
  getSumOfValidMiddlePageInputs,
  getIncorrectlyOrderedInputs
}