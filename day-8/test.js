const { createMatrix } = require("../day-4/day4");
const {
  identifyAntennas,
  calculateAntenodes,
  calculateAllAntenodes,
  findAntenodesSolution
} = require('./day8');
const fs = require('fs');
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

    const output = calculateAntenodes(input, 11);

    expect(output).to.deep.eq(expected);
  });

  it('should identify locations of nodes for a different pair of values', () => {
    const input = [
      [5, 6], [8, 8]
    ];
    const expected = [
      [11, 10], [2, 4]
    ];

    const output = calculateAntenodes(input, 11);

    expect(output).to.deep.eq(expected);
  });

  it('should only identify locations of nodes on the grid', () => {
    const input = [
      [1, 8], [4, 4]
    ];
    const expected = [
      [0, 7]
    ];

    const output = calculateAntenodes(input, 11);

    expect(output[0]).to.have.members(expected[0]);
  });

  it('should find all antenodes for a type of antenna', () => {
    const input = [
      [5, 6], [8, 8], [9, 9]
    ];

    const expected = [
      [7, 7], [10, 10], [11, 10], [2, 4], [1, 3]
    ];

    const output = calculateAllAntenodes(input);

    expect(output).to.have.deep.members(expected.sort());
  });

  it('should calculate test result correctly', () => {
    const input = {
      '0': [
        [1, 8], [2, 5], [3, 7], [4, 4]
      ],
      'A': [
        [5, 6], [8, 8], [9, 9]
      ]
    };

    const expected = 14;

    const output = findAntenodesSolution(input, matrix[0].length-1);

    expect(output).to.eq(expected);
  });

  it('should calculate final solution', () => {
    const input = fs.readFileSync('/Users/lewis.jones/WebstormProjects/advent-of-code/day-8/input.txt').toString();
    const matrix = createMatrix(input);
    const antennas = identifyAntennas(matrix);

    const expected = 259;

    const output = findAntenodesSolution(antennas, matrix[0].length-1);
    expect(output).to.eq(expected);
  });
});
