import Player from "./Player.js";
import prompt from "../helpers/prompt.js";

export default class Game {
  playerX: Player | undefined; // funkar detta TS?
  playerO: Player | undefined; // funkar detta TS?

  constructor() {
    this.createPlayer();
  }

  createPlayer() {
    console.clear();
    console.log("Welcome to Connect 4 Game. Please enter your names");
    // Gör PlayerX & PlayerO och använder mig av prompt för att få in namnen och sparar dem.
    this.playerX = new Player(prompt("Enter the name for player X: "), "x");
    this.playerO = new Player(prompt("Enter the name for player 0: "), "0");
  }
}
