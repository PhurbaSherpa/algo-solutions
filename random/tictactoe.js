// give a string that represents the board of a tic tac toe game find the number of wins X can win instantly and the number of ways O can win if it was their current turn

// return in array with first elment as X ways to win and second element as O wins to win

// if someone has won already return [0,0]

let board = "X X\n XX\nXOO"; // [2,0]
let board1 = "X X\n OO\nOOO"; // [2,2]
let board2 = "X X\nOOO\nXOO"; // [0,0]

function tictactoe(str) {
  let xWins = 0;
  let oWins = 0;
  let board = str.split("\n").map(row => row.split(""));

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (board[row][col] === " ") {
        xWins += check(board, row, col, "X");
        oWins += check(board, row, col, "O");
      } else {
        if (check(board, row, col, board[row][col])) return [0, 0];
      }
    }
  }

  return [xWins, oWins];
}

function check(board, row, col, symbol) {
  let numOfWins = 0;
  if (col === 0) {
    if (board[row][col + 1] === symbol && board[row][col + 2] === symbol)
      numOfWins++;
  } else if (col === 2) {
    if (board[row][col - 1] === symbol && board[row][col - 2] === symbol)
      numOfWins++;
  } else if (col === 1) {
    if (board[row][col - 1] === symbol && board[row][col + 1] === symbol)
      numOfWins++;
  } else if (row === 0) {
    if (board[row + 1][col] === symbol && board[row + 2][col] === symbol)
      numOfWins++;
  } else if (row === 1) {
    if (board[row - 1][col] === symbol && board[row + 1][col] === symbol)
      numOfWins++;
  } else if (row === 2) {
    if (board[row - 1][col] === symbol && board[row - 2][col] === symbol)
      numOfWins++;
  }

  return numOfWins;
}

console.log(tictactoe(board));
console.log(tictactoe(board1));
console.log(tictactoe(board2));
