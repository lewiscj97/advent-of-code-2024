const DIRECTIONS_INVERSE = {
  'UP': '^',
  'RIGHT': '>',
  'LEFT': '<',
  'DOWN': 'v'
};

const DIRECTIONS = {
  '^': 'UP',
  '>': 'RIGHT',
  '<': 'LEFT',
  'v': 'DOWN',
};

const MOVE_DELTAS = {
  'UP': [-1, 0],
  'DOWN': [1, 0],
  'LEFT': [0, -1],
  'RIGHT': [0, 1],
}

module.exports = {
  DIRECTIONS,
  DIRECTIONS_INVERSE,
  MOVE_DELTAS
}