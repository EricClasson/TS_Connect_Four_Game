export default class Board {
  matrix: string[][];

  constructor() {
    this.matrix = [
      ["", "O", "X", "O", "X", "O", "X"],
      ["O", "X", "O", "X", "O", "X", "O"],
      ["X", "X", "O", "X", "O", "X", "O"],
      ["O", "O", "X", "O", "X", "O", "X"],
      ["X", "O", "X", "X", "O", "X", "O"],
      ["O", "X", "O", "X", "O", "X", "O"],
    ];

    // this.matrix = [...new Array(6)].map(() => [...new Array(7)].map(() => ""));
  }

  render() {
    const columnNumber =
      "  " + [...Array(7).keys()].map((n) => n + 1).join("  ") + "";
    let line = "\n" + "-".repeat(22) + "\n";
    console.log(
      columnNumber +
        line +
        this.matrix
          .map((row) => row.map((marker) => `| ${marker} `).join("") + "|")
          .join(line) +
        line
    );
  }
}
