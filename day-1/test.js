var expect = require('chai').expect;
const { processInput } = require('./index');

describe('Day 1', () => {

  const testInput =
    "3   4\n" +
    "4   3\n" +
    "2   5\n" +
    "1   3\n" +
    "3   9\n" +
    "3   3"

  it('should process an input and store it as an object', () => {
    const output = processInput(testInput);

    expect(output.left.length).to.equal(6);
    expect(output.right.length).to.equal(6);
  });

  it('should sort the lists', () => {
    const output = processInput(testInput);

    expect(output.left).to.deep.equal([1, 2, 3, 3, 3, 4]);
    expect(output.right).to.deep.equal([3, 3, 3, 4, 5, 9]);
  });
});
