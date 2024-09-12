import Player from './Player.js';
import prompt from '../helpers/prompt.js';
import Board from './Board.js';
import MakeYourMove from './MakeYourMove.js';
import CheckForWin from './CheckForWin.js';

export default class Game {
  playerX: Player;
  playerO: Player;
  board: Board;
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
      let playAgain: string;
      while (true) {
        playAgain = prompt(
          'Do you want to play again? (yes/no)?: '
        ).toLowerCase();
        if (playAgain !== 'yes' && playAgain !== 'no') {
          console.log('Type in "yes" or "no"');
        } else {
          if (playAgain == 'yes') {
            this.reset();
            break;
          }
        }
      }
    }
  }
  // Function that creates the players and descides the game.
  createPlayer(): void {
    console.clear();
    console.log('Welcome to Connect 4 Game. ');
    let choiceForGame: string; // variabel for choiceForGame set to string
    let playerNameX: string; // variabel for playerNameX set to string
    let playerNameY: string; // variabel for playerNameY set to string

    // Asks if they want to play agains a computer. If "yes" we set the computer to player O, Then asks for the name of the player X.
    // If "no" its a game of 2 players. then we ask for Player O name & Player X name.
    // A loop that checks so we get a "yes" or "no". if Typed "1" or "hi" it will ask again.
    while (true) {
      console.log('Please select game.. ');
      console.log(
        'Play against a computer? Enter: (yes)' +
          '\n' +
          'Play against another human? Enter: (no)' +
          '\n'
      );
      choiceForGame = prompt('Enter here:').toLowerCase();

      if (choiceForGame !== 'yes' && choiceForGame !== 'no') {
        console.log('Type in "yes" or "no"');
      } else {
        break;
      }
    }

    if (choiceForGame === 'yes') {
      console.log('You will play against a computer. Computer is player O');

      while (true) {
        playerNameX = prompt('Enter the name for player X: ');
        if (!playerNameX || !isNaN(Number(playerNameX))) {
          console.log('Try again, a name please!');
        } else {
          break;
        }
      }
      this.playerX = new Player(playerNameX, 'X', this.board, false); // Assigns Player X not a computer
      this.playerO = new Player('computer', 'O', this.board, true); // Assigns Player O for computer
    } else {
      console.log('Its a game of 2 players.');

      while (true) {
        playerNameX = prompt('Enter the name for player X: ');
        if (!playerNameX || !isNaN(Number(playerNameX))) {
          console.log('Try again, a name please!');
        } else {
          break;
        }
      }
      while (true) {
        playerNameY = prompt('Enter the name for player Y: ');
        if (!playerNameY || !isNaN(Number(playerNameY))) {
          console.log('Try again, a name please!');
        } else {
          break;
        }
      }

      this.playerX = new Player(playerNameX, 'X', this.board); // Assigns Player X
      this.playerO = new Player(playerNameY, 'O', this.board); // Assigns Player O
    }
  }

  // Function that starts the game.
  startGame(): void {
    // Loop that goes until we have a winner or its a draw.
    while (!this.makeYourMove.isWinner && !this.makeYourMove.isdraw) {
      console.clear();
      this.board.render(); // Render out the board with this function.
      let player =
        this.makeYourMove.currentPlayerMarker === 'X'
          ? this.playerX
          : this.playerO;

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
    this.board.render();
    if (this.makeYourMove.isWinner) {
      let winnerPlayer =
        this.makeYourMove.isWinner === 'X' ? this.playerX : this.playerO;
      console.log(
        '\n' +
          `The winner is ${winnerPlayer?.name} & marker: ${winnerPlayer?.marker} `
      );
      console.log('The game is over.');
    } else {
      console.log(`Its a draw `);
      console.log('The game is over.');
    }
  }

  // resets the game
  reset(): void {
    this.makeYourMove.isWinner = '';
    this.makeYourMove.isdraw = false;
    this.makeYourMove.currentPlayerMarker = 'X';
  }
}
