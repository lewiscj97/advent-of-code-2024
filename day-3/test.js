const expect = require('chai').expect;
const {
  extractCommands,
  calculateMulCommand,
  calculateTotalOfMulCommands,
  extractEnhancedCommands,
  sanitiseCommands
} = require('./day3');
const fs = require('fs');

describe('Day 2', () => {
  describe('Part 1', () => {
    it('should identify correct mul commands', () => {
      const input = "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))";
      const expected = ["mul(2,4)", "mul(5,5)", "mul(11,8)", "mul(8,5)"];

      const output = extractCommands(input);
      expect(output).to.deep.eq(expected);
    });

    it('should calculate expected result of mul command', () => {
      const command = "mul(2,4)";
      const expected = 8;

      const output = calculateMulCommand(command);
      expect(output).to.eq(expected);
    });

    it('should calculate total of all mul commands from input', () => {
      const input = ["mul(2,4)", "mul(5,5)", "mul(11,8)", "mul(8,5)"];
      const expected = 161;

      const output = calculateTotalOfMulCommands(input);
      expect(output).to.eq(expected);
    });

    it('should calculate solution', () => {
      const testInput = fs.readFileSync('/Users/lewis.jones/WebstormProjects/advent-of-code/day-3/test-input.txt').toString();
      const commands = extractCommands(testInput);
      const expected = 182619815;

      const output = calculateTotalOfMulCommands(commands);
      expect(output).to.eq(expected);
    });
  });

  describe('Part 2', () => {
    it('should identify do and dont commands', () => {
      const testInput = "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))";
      const expected = ['mul(2,4)', 'don\'t()', 'mul(5,5)', 'mul(11,8)', 'do()', 'mul(8,5)'];

      const output = extractEnhancedCommands(testInput);
      expect(output).to.deep.eq(expected);
    });

    it('should remove mul commands after don\'ts', () => {
      const input = ['mul(2,4)', 'don\'t()', 'mul(5,5)', 'mul(11,8)', 'do()', 'mul(8,5)'];
      const expected = ['mul(2,4)', 'mul(8,5)'];

      const output = sanitiseCommands(input);
      expect(output).to.deep.eq(expected);
    });

    it('should calculate correct total from test input', () => {
      const input = "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))";
      const expected = 48;

      const commands = extractEnhancedCommands(input);
      const sanitisedCommands = sanitiseCommands(commands);
      const output = calculateTotalOfMulCommands(sanitisedCommands);

      expect(output).to.eq(48);
    });

    it('should calculate correct solution', () => {
      const testInput = fs.readFileSync('/Users/lewis.jones/WebstormProjects/advent-of-code/day-3/test-input.txt').toString();
      const expected = 80747545;

      const commands = extractEnhancedCommands(testInput);
      const sanitisedCommands = sanitiseCommands(commands);
      const output = calculateTotalOfMulCommands(sanitisedCommands);

      expect(output).to.eq(expected);
    });
  });
});
