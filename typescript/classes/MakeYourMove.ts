import Board from "./Board.js";
import CheckForWin from "./CheckForWin.js";

export default class MakeYourMove {
  currentPlayerMarker: string;
  isWinner: string;
  board: Board;
  isdraw: boolean;
  winCheck: CheckForWin;

  constructor(board: Board) {
    this.board = board;
    this.winCheck = new CheckForWin(this.board);
    this.isdraw = false;
    this.isWinner = "";
    this.currentPlayerMarker = "X";
  }
  // makeYourMove takes in the parameters "marker" & "column"
  makeMove(marker: string, column: number) {
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

    // checks for a winner.
    this.isWinner = this.winCheck.winCheck();
    // checks for a draw.
    this.isdraw = this.winCheck.isDraw();
  }
}
