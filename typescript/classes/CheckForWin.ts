import Board from "./Board.js";
export default class CheckForWin {
  board: Board;
  constructor(board: Board) {
    this.board = board;
  }
  // function that checks for a win in the game
  winCheck(): string {
    const matrix = this.board.matrix;
    const rows = matrix.length;
    const cols = matrix[0].length;
    // loop through the board row and column
    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[row].length; col++) {
        let marker = matrix[row][col]; // let marker here in row and col
        if (marker === "") continue; // if marker is "" then continue

        // check horisontal win
        if (
          col <= cols - 4 &&
          marker === matrix[row][col + 1] &&
          marker === matrix[row][col + 2] &&
          marker === matrix[row][col + 3]
        ) {
          return marker;
        }

        // check vertical win
        if (
          row <= rows - 4 &&
          marker === matrix[row + 1][col] &&
          marker === matrix[row + 2][col] &&
          marker === matrix[row + 3][col]
        ) {
          return marker;
        }
        // check digonal down win
        if (
          row <= rows - 4 &&
          col <= cols - 4 &&
          marker === matrix[row + 1][col + 1] &&
          marker === matrix[row + 2][col + 2] &&
          marker === matrix[row + 3][col + 3]
        ) {
          return marker;
        }
        // check diagonal up win
        if (
          row >= 3 &&
          col <= cols - 4 &&
          marker === matrix[row - 1][col + 1] &&
          marker === matrix[row - 2][col + 2] &&
          marker === matrix[row - 3][col + 3]
        ) {
          return marker;
        }
      }
    }
    return "";
  }

  // function that checks if its a draw game
  isDraw(): boolean {
    return this.board.matrix.every((row) => row.every((cell) => cell !== ""));
  }
}
