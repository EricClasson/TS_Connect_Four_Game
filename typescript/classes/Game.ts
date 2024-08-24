import Player from "./Player.js";
import prompt from "../helpers/prompt.js";
import Board from "./Board.js";

export default class Game {
  playerX: Player | undefined;
  playerO: Player | undefined;
  board: Board;
  player: Player | undefined;

  constructor() {
    this.createPlayer();
    this.board = new Board();
    this.startGame();
  }

  createPlayer() {
    console.clear();
    console.log("Welcome to Connect 4 Game. Please enter your names");

    // Gör PlayerX & PlayerO använder mig av prompt för att få in namnen och sparar dem.
    this.playerX = new Player(prompt("Enter the name for player X: "), "x");
    this.playerO = new Player(prompt("Enter the name for player 0: "), "O");
  }

  startGame() {
    while (!this.board.isGameOver) {
      if (!this.playerX || !this.playerO) {
        console.error("One player is not defined");
        return;
      }
      console.log(
        `The game is between ${this.playerX.name} & ${this.playerO.name} ` +
          "\n"
      );

      this.board.render(); // Render out the board with this function.

      let player =
        this.board.currentPlayerMarker === "X" ? this.playerX : this.playerO;

      if (!player) {
        console.error("player is not defined");
        return;
      }
      let move = prompt(
        `Make your move Player:${player.name} "${player.marker}" - type ROW, 1-7: `
      );
      let column = +move - 1;
      this.board.makeYourMove(player.marker, column);
    }
  }
}
