export default class Board {
  matrix: string[][];
  currentPlayerMarker: string;
  isWinner: boolean;
  isADraw: boolean;
  isGameOver: boolean;

  constructor() {
    this.matrix = [...new Array(6)].map(() => [...new Array(7)].map(() => ""));
    this.currentPlayerMarker = "X";
    this.isWinner = false;
    this.isADraw = false;
    this.isGameOver = false;
  }

  render() {
    const columnNumber =
      "  " + [...Array(7).keys()].map((n) => n + 1).join("  ") + "";
    let line = "\n" + "*".repeat(22) + "\n";
    console.log(
      columnNumber +
        line +
        this.matrix
          .map((row) => row.map((column) => `| ${column} `).join("") + "|")
          .join(line) +
        line
    );
  }

  // Flytta ut make move från boardklassen
  // makeYourMove takes in the parameters "marker" & "column"

  makeYourMove(marker: string, column: number) {
    // for loop does checks for a free place in the matrix. then puts the marker in seleced column.
    let columnMove;
    for (let row = this.matrix.length - 1; row >= 0; row--) {
      columnMove = this.matrix[row];
      if (columnMove[column] == "") {
        columnMove[column] = marker;
        break;
      }
    }
    //Checks what player it is and then changes to the next player when they made its move.
    this.currentPlayerMarker = this.currentPlayerMarker === "X" ? "O" : "X";
  }
}
