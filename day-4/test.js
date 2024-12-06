const expect = require('chai').expect;
const { createMatrix } = require("./day4");

describe('Day 4', () => {
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
