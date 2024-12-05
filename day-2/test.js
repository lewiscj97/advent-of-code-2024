const expect = require('chai').expect;
const { validateReport } = require('./day2');

describe('Day 2', () => {
  describe('Ascending values', () => {
    const ascendingTests = [
      "1 2 3 4 5",
      "2 4 6 8 10 12",
      "7 10 13 16 19 22 25"
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
      "18 15 12 9 6"
    ];

    descendingTests.forEach((val) => {
      it('should return true', () => {
        expect(validateReport(val)).to.be.true;
      });
    });
  });
});
