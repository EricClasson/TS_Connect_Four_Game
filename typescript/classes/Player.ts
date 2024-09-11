import Board from './Board.js';

export default class Player {
  name: string;
  marker: string;
  isComputer: boolean;
  board: Board;
  // Takes in the parameters 'name', 'marker', 'board', and 'isComputer', and assigns them to the player's properties.
  constructor(
    name: string,
    marker: string,
    board: Board,
    isComputer: boolean = false
  ) {
    this.name = name;
    this.marker = marker;
    this.isComputer = isComputer;
    this.board = board;
  }
  // Function that makes a move for the computer. It randomly selects a column, checks if the top row of that column is empty, and if it's not full, returns the column number. If the column is full, it tries again.
  makeComputerMove(): number {
    let coloumnMarker;
    while (true) {
      let column = Math.floor(Math.random() * 7);
      if (this.board.matrix[0][column] === '') {
        coloumnMarker = column + 1;
        break;
      }
    }
    return coloumnMarker;
  }
}
