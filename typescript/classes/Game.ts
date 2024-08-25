import Player from "./Player.js";
import prompt from "../helpers/prompt.js";
import Board from "./Board.js";
import MakeYourMove from "./MakeYourMove.js";

export default class Game {
  playerX: Player | undefined;
  playerO: Player | undefined;
  board: Board;
  player: Player | undefined;
  makeYourMove: MakeYourMove;

  constructor() {
    this.createPlayer();
    this.board = new Board();
    this.makeYourMove = new MakeYourMove(this.board);
    this.startGame();
    this.whoWon();
  }

  createPlayer() {
    console.clear();
    console.log("Welcome to Connect 4 Game. Please enter your names");

    // Gör PlayerX & PlayerO använder mig av prompt för att få in namnen och sparar dem.
    this.playerX = new Player(prompt("Enter the name for player X: "), "x");
    this.playerO = new Player(prompt("Enter the name for player 0: "), "O");
  }

  startGame() {
    let winner = "";
    if (!this.playerX || !this.playerO) {
      console.error("One player is not defined");
      return;
    }
    console.log(
      `The game is between ${this.playerX.name} & ${this.playerO.name} ` + "\n"
    );

    while (winner === "") {
      this.board.render(); // Render out the board with this function.

      let player =
        this.makeYourMove.currentPlayerMarker === "X"
          ? this.playerX
          : this.playerO;

      if (!player) {
        console.error("player is not defined");
        return;
      }
      let move = prompt(
        `Make your move Player:${player.name} "${player.marker}" - type COLUMN, 1-7: `
      );
      let column = +move - 1;
      this.makeYourMove.makeYourMove(player.marker, column);
      winner = this.makeYourMove.isWinner;
    }
  }

  whoWon() {
    console.clear();
    this.board.render();
    if (this.makeYourMove.isWinner) {
      let winnerPlayer =
        this.makeYourMove.isWinner === "X" ? this.playerO : this.playerX;
      console.log(
        "\n" +
          `The winner is ${winnerPlayer?.name} & marker:  ${winnerPlayer?.marker} `
      );
    }
  }
}
