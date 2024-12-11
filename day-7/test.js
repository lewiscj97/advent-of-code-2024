const expect = require('chai').expect;
const { parseInput, isOperable, parseFullInput, calculateTotalOfOperableCommands } = require('./day7');
const fs = require('fs');

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

    const response = isOperable(input.output, input.values);

    expect(response).to.be.true;
  });

  it('should return true, 3 values', () => {
    const input = {
      output: 3267,
      values: [81, 40, 27],
    };

    const response = isOperable(input.output, input.values);

    expect(response).to.be.true;
  });

  it('should return true, 4 values', () => {
    const input = {
      output: 292,
      values: [11, 6, 16, 20],
    };

    const response = isOperable(input.output, input.values);

    expect(response).to.be.true;
  });

  it('should return false in appropriate cases', () => {
    const inputs = [
      {
        output: 83,
        values: [17, 5],
      },
      {
        output: 156,
        values: [15, 6],
      },
      {
        output: 7290,
        values: [6, 8, 6, 15],
      },
      {
        output: 161011,
        values: [16, 10, 13],
      },
      {
        output: 192,
        values: [17, 8, 14],
      },
      {
        output: 21037,
        values: [9, 7, 18, 13],
      },
    ]

    inputs.forEach((input) => [
      expect(isOperable(input.output, input.values)).to.be.false
    ]);
  });

  it('should calculate total from test input', () => {
    const input =
      "190: 10 19\n" +
      "3267: 81 40 27\n" +
      "83: 17 5\n" +
      "156: 15 6\n" +
      "7290: 6 8 6 15\n" +
      "161011: 16 10 13\n" +
      "192: 17 8 14\n" +
      "21037: 9 7 18 13\n" +
      "292: 11 6 16 20";

    const parsedInput = parseFullInput(input);
    const expected = 3749;

    const response = calculateTotalOfOperableCommands(parsedInput);

    expect(response).to.eq(expected);
  });

  it('should calculate the final solution', () => {
    const input = fs.readFileSync('/Users/lewis.jones/WebstormProjects/advent-of-code/day-7/input.txt').toString();
    const expected = 2437272016585;

    const parsedInput = parseFullInput(input);

    const response = calculateTotalOfOperableCommands(parsedInput);

    expect(response).to.eq(expected);
  });
});
