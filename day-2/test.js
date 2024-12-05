const fs = require('fs');
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
});
