const expect = require('chai').expect;
const { parseInput, isOperable } = require('./day7');

describe('Day 7', () => {
  it('should create an object from an input', () => {
    const input = '190: 10 19';
    const expected = {
      output: 190,
      values: [10, 19],
    };

    const response = parseInput(input);

    expect(response).to.deep.eq(expected);
  });

  it('should return true if an operator can make the output from the values, 2 values', () => {
    const input = {
      output: 190,
      values: [10, 19],
    };

    const response = isOperable(input);

    expect(response).to.be.true;
  });

  it('should return true, 3 values', () => {
    const input = {
      output: 3267,
      values: [81, 40, 27],
    };

    const response = isOperable(input);

    expect(response).to.be.true;
  });
});