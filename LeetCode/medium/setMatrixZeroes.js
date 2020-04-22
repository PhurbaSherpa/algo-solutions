var setZeroes = function (matrix) {
  let visited = new Set();

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      let point = matrix[row][col];
      if (point === 0 && !visited.has(`${row},${col}`)) {
        visited.add(`${row},${col}`);
        convert(row, col, visited);
      }
    }
  }

  function convert(row, col, visited) {
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i][col] !== 0) {
        matrix[i][col] = 0;
        visited.add(`${i},${col}`);
      }
    }
    for (let i = 0; i < matrix[row].length; i++) {
      if (matrix[row][i] !== 0) {
        matrix[row][i] = 0;
        visited.add(`${row},${i}`);
      }
    }
  }
};
