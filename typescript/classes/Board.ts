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
    let line = "\n" + "-".repeat(29) + "\n";
    console.log(
      line +
        this.matrix
          .map((row) => row.map((column) => `| ${column} `).join("") + "|")
          .join(line) +
        line
    );
  }
}
