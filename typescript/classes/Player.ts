import Board from './Board.js';

export default class Player {
  name: string;
  marker: string;
  isComputer: boolean;
  board: Board;
  // takes in the parameters name and marker. and assign it to name and marker.
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
  // function that makes the computer move.  A loop that makes a random number, checks if its ok to put in a column if its a full column it checks again.
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
