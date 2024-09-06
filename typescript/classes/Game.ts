import Player from './Player.js';
import prompt from '../helpers/prompt.js';
import Board from './Board.js';
import MakeYourMove from './MakeYourMove.js';
import CheckForWin from './CheckForWin.js';

export default class Game {
  playerX: Player | undefined;
  playerO: Player | undefined;
  board: Board;
  player: Player | undefined;
  makeYourMove: MakeYourMove;
  wincheck: CheckForWin;

  constructor() {
    while (true) {
      this.board = new Board();
      this.createPlayer();
      this.makeYourMove = new MakeYourMove(this.board);
      this.wincheck = new CheckForWin(this.board);
      this.startGame();
      this.whoWon();
      console.log('');
      let playAgain = prompt(
        'Do you want to play again? (yes/no)? '
      ).toLowerCase();
      if (playAgain !== 'yes') {
        this.makeYourMove.isWinner === '';
        this.makeYourMove.isdraw === false;
        break;
      }
    }
  }
  // function that creates the players and descides the game
  createPlayer() {
    console.clear();
    console.log('Welcome to Connect 4 Game. Please select game');

    const choiceForGame = prompt(
      'Do you want to play against a computer? (yes/no): '
    ).toLowerCase();

    if (choiceForGame === 'yes') {
      console.log('You will play against a comupter');

      //skapar spelare X med hjälpt av prompt. dator spelare är satt till O
      this.playerX = new Player(
        prompt('Enter your name. You are player X: '),
        'X',
        this.board,
        false
      );
      this.playerO = new Player('computer', 'O', this.board, true);
    } else {
      console.log('Its a game of 2 players.');

      // Makes PlayerX & PlayerO, using prompt to get the names ant then saves them to new player.
      this.playerX = new Player(
        prompt('Enter the name for player X: '),
        'X',
        this.board
      );
      this.playerO = new Player(
        prompt('Enter the name for player 0: '),
        'O',
        this.board
      );
    }
  }

  // function that starts the game.
  startGame() {
    if (!this.playerX || !this.playerO) {
      console.error('One player is not defined');
      return;
    }
    // loop that goes until we have a winner or its a draw
    while (!this.makeYourMove.isWinner && !this.makeYourMove.isdraw) {
      console.clear();
      this.board.render(); // Render out the board with this function.
      let player =
        this.makeYourMove.currentPlayerMarker === 'X'
          ? this.playerX
          : this.playerO;

      if (!player) {
        console.error('player is not defined');
        return;
      }
      let move;

      if (player.isComputer) {
        move = player.makeComputerMove();
      } else {
        move = prompt(
          `Make your move Player:${player.name} "${player.marker}" - type COLUMN, 1-7: `
        );
      }

      // Takes the move and  - 1 because arrays starts with 0.
      let column = move - 1;
      // if column is not a number, and if column is under 0 or above 7 nothing will happend. if it is the right numbers the loop continues.
      if (isNaN(column) || column < 0 || column >= 7) {
        continue;
      }

      // Sends to makeMove witch player it is and what column it filled in
      this.makeYourMove.makeMove(player.marker, column);
    }
  }
  // this function checks if a person has won or if it is a draw, it first checks if it is X or O then console.log the winner. IF its a draw console.log " its a draw"
  whoWon() {
    console.clear();
    if (this.makeYourMove.isWinner) {
      let winnerPlayer =
        this.makeYourMove.isWinner === 'X' ? this.playerX : this.playerO;
      console.log(
        '\n' +
          `The winner is ${winnerPlayer?.name} & marker:  ${winnerPlayer?.marker} `
      );
      console.log('The game is over.');
    } else {
      console.log(`Its a draw `);
      console.log('The game is over.');
    }
  }
}
