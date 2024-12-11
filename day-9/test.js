const { createFileArray } = require('./day9');
const expect = require('chai').expect;

describe('Day 9', () => {
  it('creates an expanded array representation of input', () => {
    const input = '12345';
    const expected = ['0', '.', '.', '1', '1', '1', '.', '.', '.', '.', '2', '2', '2', '2', '2'];

    const response = createFileArray(input);
    expect(response).to.deep.eq(expected);
  });

  it('creates an expanded array representation of test input', () => {
    const input = '2333133121414131402';
    const expected = ['0', '0', '.', '.', '.', '1', '1', '1', '.', '.', '.', '2', '.', '.', '.', '3', '3', '3', '.', '4', '4', '.', '5', '5', '5', '5', '.', '6', '6', '6', '6', '.', '7', '7', '7', '.', '8', '8', '8', '8', '9', '9'];

    const response = createFileArray(input);

    expect(response).to.deep.eq(expected);
  });
})