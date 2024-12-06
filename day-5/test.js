const expect = require('chai').expect;
const { sanitiseRules, sanitiseInput, isInputOrdered, getSumOfValidMiddlePageInputs, getIncorrectlyOrderedInputs} = require('./day5');
const fs = require('fs');

describe('Day 5', () => {
  const sanitisedRules = [
    [47, 53], [97, 13],
    [97, 61], [97, 47],
    [75, 29], [61, 13],
    [75, 53], [29, 13],
    [97, 29], [53, 29],
    [61, 53], [97, 53],
    [61, 29], [47, 13],
    [75, 47], [97, 75],
    [47, 61], [75, 61],
    [47, 29], [75, 13],
    [53, 13]
  ];

  const sanitisedInput = [
    [75, 47, 61, 53, 29],
    [97, 61, 53, 29, 13],
    [75, 29, 13],
    [75, 97, 47, 61, 53],
    [61, 13, 29],
    [97, 13, 75, 29, 47]
  ];

  describe('Sanitising inputs', () => {
    const rules = "47|53\n" + "97|13\n" + "97|61\n" + "97|47\n" + "75|29\n" + "61|13\n" + "75|53\n" + "29|13\n" + "97|29\n" + "53|29\n" + "61|53\n" + "97|53\n" + "61|29\n" + "47|13\n" + "75|47\n" + "97|75\n" + "47|61\n" + "75|61\n" + "47|29\n" + "75|13\n" + "53|13";
    const input = '75,47,61,53,29\n' + '97,61,53,29,13\n' + '75,29,13\n' + '75,97,47,61,53\n' + '61,13,29\n' + '97,13,75,29,47';

    it('sanitises rules', () => {
      const output = sanitiseRules(rules);

      expect(output).to.deep.eq(sanitisedRules);
    });

    it('sanitises input', () => {
      const output = sanitiseInput(input);

      expect(output).to.deep.eq(sanitisedInput);
    });
  });

  describe('Solution', () => {
    it('returns true if solution is correct', () => {
      const correctVals = [
        [75, 47, 61, 53, 29],
        [97, 61, 53, 29, 13],
        [75, 29, 13],
      ];

      correctVals.forEach((input) => {
        const output = isInputOrdered(sanitisedRules, input);

        expect(output).to.be.true;
      });
    });

    it('returns false if solution is incorrect', () => {
      const incorrectVals = [
        [75, 97, 47, 61, 53],
        [61, 13, 29],
        [97, 13, 75, 29, 47]
      ];

      incorrectVals.forEach((input) => {
        const output = isInputOrdered(sanitisedRules, input);
        expect(output).to.be.false;
      });
    });

    it('returns sum of middle pages for all valid inputs', () => {
      const expected = 143;
      const output = getSumOfValidMiddlePageInputs(sanitisedRules, sanitisedInput);

      expect(output).to.eq(expected);
    });

    it('returns final solution', () => {
      const rules = fs.readFileSync('/Users/lewis.jones/WebstormProjects/advent-of-code/day-5/inputs/rules.txt').toString();
      const values = fs.readFileSync('/Users/lewis.jones/WebstormProjects/advent-of-code/day-5/inputs/values.txt').toString();

      const sanitisedRules = sanitiseRules(rules);
      const sanitisedValues = sanitiseInput(values);

      const expected = 3608;

      const output = getSumOfValidMiddlePageInputs(sanitisedRules, sanitisedValues);
      expect(output).to.eq(expected);
    });
  });

  describe('Part 2', () => {
    it('gets the incorrectly ordered inputs', () => {
      const incorrectVals = [
        [75, 97, 47, 61, 53],
        [61, 13, 29],
        [97, 13, 75, 29, 47]
      ];

      const output = getIncorrectlyOrderedInputs(sanitisedRules, incorrectVals);
      expect(output).to.deep.eq(incorrectVals);
    });


  });
});
