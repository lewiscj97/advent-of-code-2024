const { createMatrix } = require("../day-4/day4");
const {
  identifyAntennas,
  calculateAntenodes,
} = require('./day8');
const expect = require('chai').expect;

describe('Day 8', () => {

  const input =
    "............\n" +
    "........0...\n" +
    ".....0......\n" +
    ".......0....\n" +
    "....0.......\n" +
    "......A.....\n" +
    "............\n" +
    "............\n" +
    "........A...\n" +
    ".........A..\n" +
    "............\n" +
    "............";

  const matrix = [
      ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '0', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '0', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '0', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '0', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', 'A', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', 'A', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.', 'A', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.']
    ];

  it('generates matrix', () => {
    const output = createMatrix(input);
    expect(output).to.deep.eq(matrix);
  });

  it('should identify the coordinates of all antennas', () => {
    const expected = {
      '0': [
        [1, 8], [2, 5], [3, 7], [4, 4]
      ],
      'A': [
        [5, 6], [8, 8], [9, 9]
      ]
    };

    const output = identifyAntennas(matrix);
    expect(output).to.deep.eq(expected);
  });

  it('should identify locations of nodes for a pair of values', () => {
    const input = [
      [1, 8], [2, 5]
    ];
    const expected = [
      [0, 11], [3, 2]
    ];

    const output = calculateAntenodes(input);

    expect(output).to.deep.eq(expected);
  });

  it('should identify locations of nodes for a different pair of values', () => {
    const input = [
      [5, 6], [8, 8]
    ];
    const expected = [
      [11, 10], [2, 4]
    ];

    const output = calculateAntenodes(input);

    expect(output).to.deep.eq(expected);
  });
});
