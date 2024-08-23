import Player from "./Player.js";
import prompt from "../helpers/prompt.js";
import Board from "./Board.js";

export default class Game {
  playerX: Player | undefined;
  playerO: Player | undefined;
  Board: Board;

  constructor() {
    this.createPlayer();
    this.Board = new Board();
    this.startGame();
  }

  createPlayer() {
    console.clear();
    console.log("Welcome to Connect 4 Game. Please enter your names");
    // Gör PlayerX & PlayerO och använder mig av prompt för att få in namnen och sparar dem.
    this.playerX = new Player(prompt("Enter the name for player X: "), "X");
    this.playerO = new Player(prompt("Enter the name for player 0: "), "O");
  }

  startGame() {
    console.log(`Starting the game between ${this.playerX} & ${this.playerO}`);
    this.Board.render();
  }
}
