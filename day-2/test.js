const expect = require('chai').expect;
const { validateReport, validateReports } = require('./day2');
const fs = require('fs');

describe('Day 2', () => {
  describe('Ascending values', () => {
    const ascendingTests = [
      "1 2 3 4 5",
      "2 4 6 8 10 12",
      "7 10 13 16 19 22 25",
      "1 3 5 6 8 11",
      "1 3 6 7 9",
    ];

    ascendingTests.forEach((val) => {
      it('should return true', () => {
        expect(validateReport(val)).to.be.true;
      });
    });
  });

  describe('Descending values', () => {
    const descendingTests = [
      "5 4 3 2 1",
      "24 22 20 18 16 14",
      "18 15 12 9 6",
      "160 157 156 154 151",
      "7 6 4 2 1"
    ];

    descendingTests.forEach((val) => {
      it('should return true', () => {
        expect(validateReport(val)).to.be.true;
      });
    });
  });

  describe('Unhappy paths', () => {
    const unhappyTests = [,
      "9 7 6 2 1",
      "1 2 7 8 9"
    ];

    unhappyTests.forEach((val) => {
      it('should return false', () => {
        expect(validateReport(val)).to.be.false;
      });
    });
  });

  describe('Full solution', () => {
    it('correctly determines how many reports have passed', () => {
      const testInput = fs.readFileSync('/Users/lewis.jones/WebstormProjects/advent-of-code/day-2/inputs/test-input.txt').toString();
      const expected = 4;

      expect(validateReports(testInput)).to.eq(expected);
    });

    it('correctly calculates solution', () => {
      const solutionInput = fs.readFileSync('/Users/lewis.jones/WebstormProjects/advent-of-code/day-2/inputs/solution-input.txt').toString();
      const expected = 489;

      expect(validateReports(solutionInput)).to.eq(expected);
    })
  });

  describe('Part two', () => {
    it('Passes when removing one bad level', () => {
      const input = "1 3 2 4 5";
      const input2 = "8 6 4 4 1";
      const input3 = "6 7 10 16 13";

      expect(validateReport(input)).to.be.true;
      expect(validateReport(input2)).to.be.true;
      expect(validateReport(input3)).to.be.true; // failing
    });
  });
});
