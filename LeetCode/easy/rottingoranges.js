var orangesRotting = function(grid) {
  let q = [];
  let fresh = 0;
  let mins = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === 2) q.push([row, col]);
      if (grid[row][col] === 1) fresh++;
    }
  }

  while (q.length > 0 && fresh) {
    let newQ = [];
    while (q.length) {
      let currentRotten = q.shift();
      let newRotten = infect(grid, currentRotten[0], currentRotten[1], newQ);
      fresh -= newRotten;
    }
    mins++;
    q = newQ;
  }
  if (fresh !== 0) return -1;
  return mins;
};

var infect = function(grid, row, col, q) {
  let infected = 0;
  if (row > 0 && grid[row - 1][col] === 1) {
    grid[row - 1][col] = 2;
    infected++;
    q.push([row - 1, col]);
  }
  if (col > 0 && grid[row][col - 1] === 1) {
    grid[row][col - 1] = 2;
    infected++;
    q.push([row, col - 1]);
  }
  if (row < grid.length - 1 && grid[row + 1][col] === 1) {
    grid[row + 1][col] = 2;
    infected++;
    q.push([row + 1, col]);
  }
  if (col < grid[row].length - 1 && grid[row][col + 1] === 1) {
    grid[row][col + 1] = 2;
    infected++;
    q.push([row, col + 1]);
  }

  return infected;
};
