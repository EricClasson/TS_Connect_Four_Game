import Board from "./Board.js";
export default class CheckForWin {
  board: Board;
  constructor(board: Board) {
    this.board = board;
  }

  winCheck() {
    const matrix = this.board.matrix;
    // the offsets of every possible win

    let offsets = [
      [
        [0, 0],
        [0, 1],
        [0, 2],
        [0, 3],
      ],
      [
        [0, 0],
        [1, 0],
        [2, 0],
        [3, 0],
      ],
      [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      [
        [0, 0],
        [1, -1],
        [2, -2],
        [3, -3],
      ],
    ];

    // loop through the board row and column
  }
}
