const expect = require('chai').expect;
const { parseInput } = require('./day7');

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
});