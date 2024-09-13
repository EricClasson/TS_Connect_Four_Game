# Connect 4 Game

## Building progress/problem solving

1. Create classes Game, Board, Player - connect Game to index.js.
2. Create Class Player.
3. Create Game class and createplayer function inside.
4. Add new Game() in index.ts so we can render somthing.
5. Create Board class - needs.. to create a bord with matrix(), booleans of isWinner, isGameOver, isDraw. and deside playermarker starter turn 'x', Render() this so it can print in console.log()
6. In Game class, Create startGame() ant render() out the board after the names are added.
7. In startGame() Check currentMarker, then prompt to let the player descide what row the marker should be on.
8. In makeYourMove make a loop that checks all rows an puts in the deside marker.
9. Fix so the entered marker with promt assigns the puts in the seleced row in the array. Then in makeYourMove check what marker it is then change.
10. Fix bugg so that the marker comes on top of eachother.
11. Make winCheck.. first i need to make an offset so i know what it takes to win.. to do so i need 4 cells to be the same. then i need to loop through matrix row and column cells to check if they have x & o that are in series. - wincheck is working sort of! the base is should be correct.. check for bugs and try the game.
12. move CheckForWin out to an own class. then make a function that checks for a draw. put it inside whoWon function.
13. isDraw function. that loops the last row and check if thers no empty fileds. then return that its a draw.
14. Make the wrong handling for the game, if input nr is < 0 || > 7, then log that it should be 1-7. when the input nothing or higher number than t nothig should happend
15. Make the dummycomputer
16. make wronghandling so player/computer cant put in a full column
17. check the newGame function? does it work?
18. fixing comments

## Tankar om projektet.

- Det var ett spännande projekt, jag blev verkligen utmanad. Det var rätt tufft i början innan man förstod logiken i hur man skulle skriva koden. Jag testade 2 nya saker i det här projektet. 1, det var att jag skrev ned delarna och försöka bryta ned stegen. (Building progress/problem solving). Jag har mest skrivit ned saker för att få en överblick hur det ska byggas. I slutändan har inte koden blivit som jag har skrivit där utan jag har fått ändra mycket under byggandets tid. Det här hjälpte mycket för att se vad som behövde göras och lättare få en överblick för mig. 2, jag öppnade upp ett nytt "test" dokument där jag hade lite test miljö. Om jag inte riktigt visste hur jag skulle lösa problemen började jag där. Exempelvis när jag gjorde och jobbade med checkforwin eller computer delen, de var tuff..
- Jag kommer nog testa göra om projektet igen för min egen skull, så jag det sitter bättre.

## Installation

\_Below is an example of how you can clone, install and start the projekt

2. Clone the repo
   ```sh
   git clone https://github.com/EricClasson/TS_Connect_Four_Game.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Start Game
   ```sh
   npm start
   ```
