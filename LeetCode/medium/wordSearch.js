var exist = function (board, word) {
  let visited = new Set();
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      let char = board[row][col];
      if (char === word[0]) {
        visited.clear();
        if (search(row, col, 0, visited)) return true;
      }
    }
  }
  return false;
  function search(row, col, idx, visited) {
    let key = `${row},${col}`;
    if (idx >= word.length) return true;
    if (
      row < 0 ||
      col < 0 ||
      row >= board.length ||
      col >= board[row].length ||
      visited.has(key) ||
      board[row][col] !== word[idx]
    )
      return false;
    visited.add(key);
    let status =
      search(row, col - 1, idx + 1, visited) ||
      search(row - 1, col, idx + 1, visited) ||
      search(row, col + 1, idx + 1, visited) ||
      search(row + 1, col, idx + 1, visited);
    if (!status) {
      visited.delete(key);
      return false;
    }
    return true;
  }
};
