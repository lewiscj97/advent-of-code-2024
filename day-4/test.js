const expect = require('chai').expect;
const {
  createMatrix,
  countXmas,
  _inVerticalLine,
  _inHorizontalLine,
  _reverseHorizontal,
  _reverseVertical,
  _diagonalUpRight,
  _diagonalUpLeft,
  _diagonalDownLeft
} = require("./day4");

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

      const expected = [
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
      ]
      const output = createMatrix(input);

      expect(output).to.deep.eq(expected);
    });
  });

  describe('Counting xmas', () => {
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
    ]

    it('should identify xmas in a line', () => {
      const expected = 3;
      const output = _inHorizontalLine(matrix);

      expect(output).to.eq(expected);
    });

    it('should identify xmas vertically', () => {
      const expected = 1;
      const output = _inVerticalLine(matrix);

      expect(output).to.eq(expected);
    });

    it('should identify xmas reverse horizontal', () => {
      const expected = 2;
      const output = _reverseHorizontal(matrix);

      expect(output).to.eq(expected);
    });

    it('should identify xmas reverse vertical', () => {
      const expected = 2;
      const output = _reverseVertical(matrix);

      expect(output).to.eq(expected);
    });

    it('should calculate diagonal up right', () => {
      const expected = 4;
      const output = _diagonalUpRight(matrix);

      expect(output).to.eq(expected);
    });

    it('should calculate diagonal up left', () => {
      const expected = 4;
      const output = _diagonalUpLeft(matrix);

      expect(output).to.eq(expected);
    });

    it('should calculate diagonal down left', () => {
      const expected = 1;
      const output = _diagonalDownLeft(matrix);

      expect(output).to.eq(expected);
    });
  });
});
