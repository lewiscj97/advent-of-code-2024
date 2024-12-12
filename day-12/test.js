const expect = require('chai').expect;
const {
  createMatrix
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
});