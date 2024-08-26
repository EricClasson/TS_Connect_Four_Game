import Player from "./Player.js";
import prompt from "../helpers/prompt.js";
import Board from "./Board.js";
import MakeYourMove from "./MakeYourMove.js";
import CheckForWin from "./CheckForWin.js";

export default class Game {
  playerX: Player | undefined;
  playerO: Player | undefined;
  board: Board;
  player: Player | undefined;
  makeYourMove: MakeYourMove;
  wincheck: CheckForWin;

  constructor() {
    this.createPlayer();
    this.board = new Board();
    this.makeYourMove = new MakeYourMove(this.board);
    this.wincheck = new CheckForWin(this.board);
    this.startGame();
    this.whoWon();
  }

  createPlayer() {
    console.clear();
    console.log("Welcome to Connect 4 Game. Please enter your names");

    // Gör PlayerX & PlayerO använder mig av prompt för att få in namnen och sparar dem.
    this.playerX = new Player(prompt("Enter the name for player X: "), "X");
    this.playerO = new Player(prompt("Enter the name for player 0: "), "O");
  }

  startGame() {
    if (!this.playerX || !this.playerO) {
      console.error("One player is not defined");
      return;
    }

    while (!this.makeYourMove.isWinner && !this.makeYourMove.isdraw) {
      console.clear();
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
    }
  }

  whoWon() {
    console.clear();
    if (this.makeYourMove.isWinner) {
      let winnerPlayer =
        this.makeYourMove.isWinner === "X" ? this.playerX : this.playerO;
      console.log(
        "\n" +
          `The winner is ${winnerPlayer?.name} & marker:  ${winnerPlayer?.marker} `
      );
    } else {
      console.log(this.makeYourMove.isdraw);
    }
  }
}
