var expect = require('chai').expect;
const { processInput } = require('./index');

describe('Day 1', () => {
  it('should process an input.txt and store it as an object', () => {
    const input =
      "3   4\n" +
      "4   3\n" +
      "2   5\n" +
      "1   3\n" +
      "3   9\n" +
      "3   3"

    const output = processInput(input);
    expect(output.left.length).to.equal(6);
    expect(output.right.length).to.equal(6);
  });
});
