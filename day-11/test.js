const expect = require('chai').expect;
const { parseInput, applyRules } = require('./day11');

describe('Day 11', () => {
  describe('Part 1', () => {
    it('should parse input', () => {
      const input = '0 1 10 99 999';
      const expected = [0, 1, 10, 99, 999];

      const response = parseInput(input);

      expect(response).to.deep.eq(expected);
    });

    it('should replace 0 with 1', () => {
      const input = 0;
      const expected = 1;

      const response = applyRules(input);

      expect(response).to.eq(expected);
    });
  });
});