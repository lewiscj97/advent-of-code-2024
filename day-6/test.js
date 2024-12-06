const expect = require('chai').expect;
const { createMatrix, locateGuard } = require('./day6');


describe('Day 6', () => {
  const input =
    "....#.....\n" +
    ".........#\n" +
    "..........\n" +
    "..#.......\n" +
    ".......#..\n" +
    "..........\n" +
    ".#..^.....\n" +
    "........#.\n" +
    "#.........\n" +
    "......#...";

  const matrix = [
    ['.', '.', '.', '.', '#', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '#'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '#', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '#', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '#', '.', '.', '^', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '#', '.'],
    ['#', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '#', '.', '.', '.']
  ];

  it('creates a matrix', () => {
    const output = createMatrix(input);
    expect(output).to.deep.equal(matrix);
  });

  it('can locate the guard', () => {
    const expected = [6, 4];
    const output = locateGuard(matrix);

    expect(output.location).to.deep.eq(expected);
  });

  it('knows direction of travel', () => {
    const expected = 'UP';
    const output = locateGuard(matrix);

    expect(output.direction).to.eq(expected);
  });
});