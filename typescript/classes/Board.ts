export default class Board {
  matrix: string[][];

  constructor() {
    this.matrix = [...new Array(6)].map(() => [...new Array(7)].map(() => ""));
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
}
