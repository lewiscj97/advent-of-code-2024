const { createFileArray } = require('./day9');
const expect = require('chai').expect;

describe('Day 9', () => {
  it('creates an expanded array representation of input', () => {
    const input = '12345';
    const expected = ['0', '.', '.', '1', '1', '1', '.', '.', '.', '.', '2', '2', '2', '2', '2'];

    const response = createFileArray(input);
    expect(response).to.deep.eq(expected);
  });
})