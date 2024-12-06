function getSumOfValidMiddlePageInputs(rules, input) {
  let sum = 0;

  const validValues = input.filter((x) => isInputOrdered(rules, x));
  validValues.forEach((val) => {
    sum += val[Math.round((val.length - 1) / 2)];
  });

  return sum;
}

function isInputOrdered(rules, input) {
  let valid = true;

  input.forEach((value, x) => {
    // get rules that apply to the value
    const applicableRules = [];
    rules.forEach((rule) => {
      if (rule.includes(value)) {
        applicableRules.push(rule);
      }
    });

    // go through the rules and check if other values are contained
    const relatedRules = [];
    applicableRules.forEach((rule) => {
      const otherVal = rule.find((val) => val !== value);
      if (input.includes(otherVal)) {
        relatedRules.push(rule);
      }
    });

    relatedRules.forEach((rule) => {
      let otherVal;

      if (rule[0] === value) {
        otherVal = rule[1];
        if (input.indexOf(otherVal) < input.indexOf(value)) {
          valid = false;
          return;
        }
      }

      if (rule[1] === value) {
        otherVal = rule[0];
        if (input.indexOf(otherVal) > input.indexOf(value)) {
          valid = false;
        }
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

module.exports = { sanitiseRules, sanitiseInput, isInputOrdered, getSumOfValidMiddlePageInputs }