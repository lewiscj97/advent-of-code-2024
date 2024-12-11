const expect = require('chai').expect;
const { parseInput, applyRules, blink, blinkTimes } = require('./day11');

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

    it('should split numbers with even digits into two values', () => {
      const input = 99;
      const expected = [9, 9];

      const response = applyRules(input);

      expect(response).to.deep.eq(expected);
    });

    it('should multiply other values by 2024', () => {
      const input = 999;
      const expected = 2021976;

      const response = applyRules(input);

      expect(response).to.eq(expected);
    });

    it('should calculate new stones after blinking', () => {
      const input = '0 1 10 99 999';
      const expected = '1 2024 1 0 9 9 2021976';

      const response = blink(input);

      expect(response).to.eq(expected);
    });

    it('should calculate correct number of stones after multiple blinks', () => {
      const input = '125 17';
      const firstBlink = blink(input);
      const secondBlink = blink(firstBlink);
      const thirdBlink = blink(secondBlink);
      const fourthBlink = blink(thirdBlink);
      const fifthBlink = blink(fourthBlink);

      expect(firstBlink).to.eq('253000 1 7');
      expect(secondBlink).to.eq('253 0 2024 14168');
      expect(thirdBlink).to.eq('512072 1 20 24 28676032');
      expect(fourthBlink).to.eq('512 72 2024 2 0 2 4 2867 6032');
      expect(fifthBlink).to.eq('1036288 7 2 20 24 4048 1 4048 8096 28 67 60 32');
    });

    it('should calculate correct number of stones given number of blinks', () => {
      const input = '125 17';
      const times = 5;
      const expected = '1036288 7 2 20 24 4048 1 4048 8096 28 67 60 32';

      const response = blinkTimes(input, times);

      expect(response).to.eq(expected);
    });
  });
});