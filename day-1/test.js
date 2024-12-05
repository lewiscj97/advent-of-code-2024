const expect = require('chai').expect;
const { processInput, calculateDistances, calculateSimilarityScore } = require('./day1');
const fs = require('fs');

describe('Day 1', () => {
  const testInput = fs.readFileSync('/Users/lewis.jones/WebstormProjects/advent-of-code/day-1/inputs/test-input.txt').toString();
  const solutionInput = fs.readFileSync('/Users/lewis.jones/WebstormProjects/advent-of-code/day-1/inputs/input.txt').toString();

  it('should process an input and store it as an object', () => {
    console.log(testInput)
    const output = processInput(testInput);

    expect(output.left.length).to.equal(6);
    expect(output.right.length).to.equal(6);
  });

  it('should sort the lists', () => {
    const output = processInput(testInput);

    expect(output.left).to.deep.equal([1, 2, 3, 3, 3, 4]);
    expect(output.right).to.deep.equal([3, 3, 3, 4, 5, 9]);
  });

  it('should calculate the distance', () => {
    const lists = processInput(testInput);
    const expected = 11;

    expect(calculateDistances(lists)).to.equal(expected);
  });

  it('should output the solution', () => {
    const processedInput = processInput(solutionInput);
    const output = calculateDistances(processedInput);

    const expected = 1506483;
    expect(output).to.equal(expected);
  });

  it('should calculate the similarity score for test data', () => {
    const processedInput = processInput(testInput);
    const expected = 31;

    const output = calculateSimilarityScore(processedInput);
    expect(output).to.eq(expected);
  });

  it('should calculate the similarity score for input data', () => {
    const processedInput = processInput(solutionInput);
    const expected = 23126924;

    const output = calculateSimilarityScore(processedInput);
    expect(output).to.eq(expected);
  });
});
