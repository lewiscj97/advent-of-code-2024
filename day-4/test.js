const expect = require('chai').expect;
const {
  createMatrix,
  countXmas,
  countMasses
} = require("./day4");

const fs = require('fs');

const matrix = [
  ['M', 'M', 'M', 'S', 'X', 'X', 'M', 'A', 'S', 'M'],
  ['M', 'S', 'A', 'M', 'X', 'M', 'S', 'M', 'S', 'A'],
  ['A', 'M', 'X', 'S', 'X', 'M', 'A', 'A', 'M', 'M'],
  ['M', 'S', 'A', 'M', 'A', 'S', 'M', 'S', 'M', 'X'],
  ['X', 'M', 'A', 'S', 'A', 'M', 'X', 'A', 'M', 'M'],
  ['X', 'X', 'A', 'M', 'M', 'X', 'X', 'A', 'M', 'A'],
  ['S', 'M', 'S', 'M', 'S', 'A', 'S', 'X', 'S', 'S'],
  ['S', 'A', 'X', 'A', 'M', 'A', 'S', 'A', 'A', 'A'],
  ['M', 'A', 'M', 'M', 'M', 'X', 'M', 'M', 'M', 'M'],
  ['M', 'X', 'M', 'X', 'A', 'X', 'M', 'A', 'S', 'X']
];

const solutionInput = fs.readFileSync('/Users/lewis.jones/WebstormProjects/advent-of-code/day-4/test-input.txt').toString();

describe('Day 4', () => {
  describe('Matrices creation', () => {
    it('should break single line into single line matrix', () => {
      const input = "XMAS";
      const expected = [['X', 'M', 'A', 'S']];

      const output = createMatrix(input);

      expect(output).to.deep.eq(expected);
    });

    it('should break multiple lines into matrix', () => {
      const input =
        "MMMSXXMASM\n" +
        "MSAMXMSMSA\n" +
        "AMXSXMAAMM\n" +
        "MSAMASMSMX\n" +
        "XMASAMXAMM\n" +
        "XXAMMXXAMA\n" +
        "SMSMSASXSS\n" +
        "SAXAMASAAA\n" +
        "MAMMMXMMMM\n" +
        "MXMXAXMASX";

      const output = createMatrix(input);

      expect(output).to.deep.eq(matrix);
    });
  });

  describe('Counting xmas', () => {
    it('should count total xmas from input', () => {
      const expected = 18;
      const output = countXmas(matrix);

      expect(output).to.eq(expected);
    });
  });

  describe('Solution', () => {
    it('should calculate final solution', () => {
      const matrix = createMatrix(solutionInput);
      const expected = 2406;

      const output = countXmas(matrix);

      expect(output).to.eq(expected);
    });
  });

  describe('Part 2', () => {
    it('should calculate total number of MAS from test input', () => {
      const expected = 9;

      const output = countMasses(matrix);
      expect(output).to.eq(expected);
    });

    it('should calculate final solution', () => {
      const matrix = createMatrix(solutionInput);
      const expected = 1807;

      const output = countMasses(matrix);
      expect(output).to.eq(expected);
    });
  });
});
