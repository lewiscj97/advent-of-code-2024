const expect = require('chai').expect;
const {
  createMatrix,
  locateGuard,
  identifyNextLocation,
  moveGuard,
  navigateMatrix,
  whatIsNewDirection
} = require('./day6');

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

  it('identifies the next location', () => {
    const currentLocation = {
      location: [6, 4],
      direction: 'UP',
    };

    const expected = '.';
    const output = identifyNextLocation(matrix, currentLocation);

    expect(output).to.eq(expected);
  });

  it('moves guard to next position in matrix', () => {
    const currentLocation = {
      location: [6, 4],
      direction: 'UP',
    };

    const expectedGuardLocation = {
      location: [5, 4],
      direction: 'UP',
    }

    const response = moveGuard(matrix, currentLocation);
    const guardLocation = locateGuard(response);

    expect(guardLocation).to.deep.eq(expectedGuardLocation);
  });

  it('returns next direction based on current direction', () => {
    const direction = 'UP';
    const expected = 'RIGHT';

    const response = whatIsNewDirection(direction);

    expect(response).to.eq(expected);
  });

  // it('count how many moves to leave matrix', () => {
  //   const expected = 41;
  //
  //   const response = navigateMatrix(matrix);
  //
  //   expect(response).to.deep.eq(expected);
  // });

  it('should move guard to the right when in front of an #', () => {
    const matrix = [
      ['.', '.', '.', '.', '#', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '^', '.', '.', '.', '.', '#'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '#', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '#', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '#', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '#', '.'],
      ['#', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '#', '.', '.', '.']
    ];

    const currentLocation = {
      location: [1, 4],
      direction: 'UP',
    }

    const expectedLocation = {
      location: [1, 5],
      direction: 'RIGHT',
    }

    const response = moveGuard(matrix, currentLocation);
    const guardLocation = locateGuard(response);

    expect(guardLocation).to.deep.eq(expectedLocation);
  })
});