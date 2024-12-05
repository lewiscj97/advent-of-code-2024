const fs = require('fs');
const expect = require('chai').expect;
const { validateReport } = require('./day2');

describe('Day 2', () => {
  it('should return safe when all input vals ascend by 1', () => {
    const testInput = "1 2 3 4 5";

    expect(validateReport(testInput)).to.be.true;
  });

  it('should return safe when all input vals ascend by 2', () => {
    const testInput = "2 4 6 8 10 12";

    expect(validateReport(testInput)).to.be.true;
  });

  it('should return safe when all input vals ascend by 3', () => {
    const testInput = "7 10 13 16 19 22 25";

    expect(validateReport(testInput)).to.be.true;
  });
});
