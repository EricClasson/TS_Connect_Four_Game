export default class Board {
  matrix: string[][];

  constructor() {
    this.matrix = [...new Array(6)].map(() => [...new Array(7)].map(() => "")); // Creates the board array
  }

  // Render out the board with coloumn number and some lines so it looks better.
  render() {
    const columnNumber =
      "  " + [...Array(7).keys()].map((n) => n + 1).join("   ") + "";
    let line = "\n" + "-".repeat(29) + "\n";
    console.log(
      columnNumber +
        line +
        this.matrix
          .map(
            (row) => row.map((marker) => `| ${marker || " "} `).join("") + "|"
          )
          .join(line) +
        line
    );
  }
}
