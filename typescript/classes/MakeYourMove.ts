import Board from "./Board.js";

export default class MakeYourMove {
  currentPlayerMarker: string;
  isWinner: string;
  isADraw: boolean;
  isGameOver: boolean;
  board: Board;

  constructor(board: Board) {
    this.board = board;
    this.isWinner = "";
    this.isADraw = false;
    this.isGameOver = false;
    this.currentPlayerMarker = "X";
  }
  // makeYourMove takes in the parameters "marker" & "column"
  makeYourMove(marker: string, column: number) {
    // for loop does checks for a free place in the matrix. then puts the marker in seleced column.
    let columnMove;
    for (let row = this.board.matrix.length - 1; row >= 0; row--) {
      columnMove = this.board.matrix[row];
      if (columnMove[column] == "") {
        columnMove[column] = marker;
        break;
      }
    }
    //Checks what player it is and then changes to the next player when they made its move.
    this.currentPlayerMarker = this.currentPlayerMarker === "X" ? "O" : "X";
    this.isWinner = this.winCheck();
  }

  winCheck(): string {
    const matrix = this.board.matrix;
    // loop through the board row and column
    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[row].length; col++) {
        let marker = matrix[row][col]; // let marker here in row and col
        if (marker === "") continue; // if marker is "" then continue

        // check horisontal win
        if (
          col <= matrix[row].length - 4 &&
          marker === matrix[row][col + 1] &&
          marker === matrix[row][col + 2] &&
          marker === matrix[row][col + 3]
        ) {
          return marker;
        }

        // check vertical win
        if (
          row <= matrix[col].length - 5 &&
          marker === matrix[row + 1][col] &&
          marker === matrix[row + 2][col] &&
          marker === matrix[row + 3][col]
        ) {
          return marker;
        }
        // check digonal down win
        if (
          row <= matrix[col].length - 5 &&
          col <= matrix[row].length - 4 &&
          marker === matrix[row + 1][col + 1] &&
          marker === matrix[row + 2][col + 2] &&
          marker === matrix[row + 3][col + 3]
        ) {
          return marker;
        }
        // check diagonal up win
        if (
          row <= matrix[col].length - 5 &&
          col >= matrix[row].length - 4 &&
          marker === matrix[row + 1][col - 1] &&
          marker === matrix[row + 2][col - 2] &&
          marker === matrix[row + 3][col - 3]
        ) {
          return marker;
        }
      }
    }
    return "";
  }
}
