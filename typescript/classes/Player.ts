import Board from "./Board.js";

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

  // se till så inte den kan lägga i en full column
  makeComputerMove() {
    let column = Math.floor(Math.random() * 7);
    // let columnMove;
    // for (let row = this.board.matrix.length - 1; row >= 0; row--) {
    //   columnMove = this.board.matrix[row];
    //   if (columnMove[column] == "") {
    //     columnMove[column] = this.marker;
    //     break;
    //   }
    // }
    return column;
  }
}
