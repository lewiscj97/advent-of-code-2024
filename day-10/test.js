const { createMatrix, identifyTrailheads, traverseTrailheads } = require("./day10");
const expect = require('chai').expect;

describe('Day 10', () => {
  describe('Part 1', () => {
    const input = [
      [0, 1, 2, 3],
      [1, 2, 3, 4],
      [8, 7, 6, 5],
      [9, 8, 7, 6]
    ];

    it('should create matrix', () => {
      const input =
        '0123\n' +
        '1234\n' +
        '8765\n' +
        '9876';

      const expected = [
        [0, 1, 2, 3],
        [1, 2, 3, 4],
        [8, 7, 6, 5],
        [9, 8, 7, 6]
      ];

      const response = createMatrix(input);
      expect(response).to.deep.eq(expected);
    });

    it('identifies trailheads', () => {
      const expected = [[0, 0]];
      const response = identifyTrailheads(input);

      expect(response).to.deep.eq(expected);
    });

    it('counts how many trailheads make it to a 9 in map', () => {
      const expected = 1;

      const response = traverseTrailheads(input);

      expect(response).to.eq(expected);
    });
  });
});