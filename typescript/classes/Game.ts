import Player from './Player.js';
import prompt from '../helpers/prompt.js';
import Board from './Board.js';
import MakeYourMove from './MakeYourMove.js';
import CheckForWin from './CheckForWin.js';

export default class Game {
  playerX: Player;
  playerO: Player;
  board: Board;
  player: Player;
  makeYourMove: MakeYourMove;
  wincheck: CheckForWin;

  constructor() {
    while (true) {
      // Loop the constructor so if the game ends, the player gets asked to play again. If "No" the game closes.
      this.board = new Board();
      this.createPlayer();
      this.makeYourMove = new MakeYourMove(this.board);
      this.wincheck = new CheckForWin(this.board);
      this.startGame();
      this.whoWon();
      console.log('');
      let playAgain = prompt(
        'Do you want to play again? (yes/no)?: '
      ).toLowerCase();
      if (playAgain !== 'yes') {
        this.makeYourMove.reset();
        break;
      }
    }
  }
  // Function that creates the players and descides the game.
  createPlayer(): void {
    console.clear();
    console.log('Welcome to Connect 4 Game. Please select game.. ');

    // Asks if they want to play agains a computer. If "yes" we set the computer to player O, Then asks for the name of the player X.
    // If "no" its a game of 2 players. then we ask for Player O name & Player X name.
    const choiceForGame = prompt(
      'Do you want to play against a computer? (yes/no): '
    ).toLowerCase();

    if (choiceForGame === 'yes') {
      console.log('You will play against a computer');

      //
      this.playerX = new Player(
        prompt('Enter your name. You are player X: '),
        'X',
        this.board,
        false
      );
      this.playerO = new Player('computer', 'O', this.board, true);
    } else {
      console.log('Its a game of 2 players.');

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

  // Function that starts the game.
  startGame(): void {
    if (!this.playerX || !this.playerO) {
      console.error('One player is not defined');
      return;
    }
    // Loop that goes until we have a winner or its a draw.
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
      // If a player is a computer it will let the computer function make a move.
      if (player.isComputer) {
        move = player.makeComputerMove();
        // Else the game plays with the 2 to names entered.
      } else {
        move = prompt(
          `Make your move Player:${player.name} "${player.marker}" - type COLUMN, 1-7: `
        );
      }

      // Takes the move and  - 1 because arrays are 0-indexed.
      let column = move - 1;
      // If column is not a number, or if column is under 0 or above 7 nothing will happend. If it is the right numbers the loop continues.
      if (isNaN(column) || column < 0 || column >= 7) {
        continue;
      }

      // Sends the current player and selected column to the makeMove function..
      this.makeYourMove.makeMove(player.marker, column);
    }
  }
  // This function checks if a person has won or if the game ended in a draw. It first checks if it is X or O then console.log the result. If its a draw, it logs "its a draw".
  whoWon(): void {
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
