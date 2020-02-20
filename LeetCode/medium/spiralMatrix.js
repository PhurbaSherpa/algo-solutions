var spiralOrder = function(matrix) {
  let spiral = [];

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] !== null) {
        oneSpiral(spiral, matrix, row, col);
      }
    }
  }
  function oneSpiral(spiral, matrix, row, col) {
    goRight(spiral, matrix, row, col);
    goDown(spiral, matrix, row, matrix[row].length - 1 - row);
    goLeft(
      spiral,
      matrix,
      matrix.length - 1 - row,
      matrix[row].length - 1 - col
    );
    goUp(spiral, matrix, matrix.length - 1 - row, col);
  }
  function goRight(spiral, matrix, row, col) {
    for (let i = col; i < matrix[row].length; i++) {
      let item = matrix[row][i];
      if (item !== null) {
        spiral.push(item);
        matrix[row][i] = null;
      }
    }
  }
  function goDown(spiral, matrix, row, col) {
    for (let i = row; i < matrix.length; i++) {
      let item = matrix[i][col];
      if (item !== null) {
        spiral.push(item);
        matrix[i][col] = null;
      }
    }
  }
  function goLeft(spiral, matrix, row, col) {
    for (let i = col; i >= 0; i--) {
      let item = matrix[row][i];
      if (item !== null) {
        spiral.push(item);
        matrix[row][i] = null;
      }
    }
  }
  function goUp(spiral, matrix, row, col) {
    for (let i = row; i >= 0; i--) {
      let item = matrix[i][col];
      if (item !== null) {
        spiral.push(item);
        matrix[i][col] = null;
      }
    }
  }
  return spiral;
};
