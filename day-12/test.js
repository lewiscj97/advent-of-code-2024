const expect = require('chai').expect;
const {
  createMatrix,
  identifyValuesAndLocations,
  calculatePerimeter,
  calculateAllPerimeters,
  calculateCost
} = require('./day12');

describe('Day 12', () => {

  const input =
    'AAAA\n' +
    'BBCD\n' +
    'BBCC\n' +
    'EEEC';

  const matrix = [
    ['A', 'A', 'A', 'A'],
    ['B', 'B', 'C', 'D'],
    ['B', 'B', 'C', 'C'],
    ['E', 'E', 'E', 'C'],
  ];

  it('should generate matrix', () => {
    const response = createMatrix(input);

    expect(response).to.deep.eq(matrix);
  });

  it('should identify each value and its coordinates', () => {
    const expected = {
      'A': [
        [0,0], [0,1], [0,2], [0,3]
      ],
      'B': [
        [1,0], [1,1], [2,0], [2,1]
      ],
      'C': [
        [1,2], [2,2], [2,3], [3,3]
      ],
      'D': [
        [1,3]
      ],
      'E': [
        [3,0], [3,1], [3,2]
      ],
    };

    const response = identifyValuesAndLocations(matrix);

    expect(response).to.deep.eq(expected);
  });

  it('should calculate perimeter for a single set of coordinates', () => {
    const input = [[0,0], [0,1], [0,2], [0,3]];
    const expected = 10;
    const value = 'A';

    const response = calculatePerimeter(input, value, matrix);

    expect(response).to.eq(expected);
  });

  it('should calculate total perimeter', () => {
    const input = {
      'A': [
        [0,0], [0,1], [0,2], [0,3]
      ],
      'B': [
        [1,0], [1,1], [2,0], [2,1]
      ],
      'C': [
        [1,2], [2,2], [2,3], [3,3]
      ],
      'D': [
        [1,3]
      ],
      'E': [
        [3,0], [3,1], [3,2]
      ],
    };

    const expected = {
      'A': 10,
      'B': 8,
      'C': 10,
      'D': 4,
      'E': 8,
    };

    const response = calculateAllPerimeters(input, matrix);

    expect(response).to.deep.eq(expected);
  });

  it('should calculate cost of matrix', () => {
    const expected = 140;

    const response = calculateCost(matrix);

    expect(response).to.eq(expected);
  });
});