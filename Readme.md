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

## Demands on asignment

- Skriv spelet 4-i-rad (Connect 4) objektorienterat och med TypeScript.
- Skriv det som ett terminal-baserat program utan webbaserat gränssnitt.
- Fokusera på att använda klasser på ett korrekt sätt. Fokusera på composition inte inheritance. (Varför? Prefer Composition over Inheritance - länk till artikel kommer)
- Förslag på indelning i minimalt antal klasser: App/Game-klass, Player-klass, Board-klass. Fundera på: Board-klassen kan brytas ner så att man inte har “makeMove”-funktionalitet och “checkForWin”-funktionalitet i den utan i separata klasser, med hjälp av komposition.
- Krav:
  - Arbeta objektorienterat - all kod ska finnas i klasser. (Utom att skapa en instans av din App/Game-klass.)
  - Koden ska vara skriven med de inställningar för Visual Studio Code som rekommenderas på bloggen.
  - Skapa ett github-repository. Det ska vara öppet. Bjud in Thomas/“ironboy” som collaborator.
  - Gör frekventa commits till ditt repo. Dvs. en commit efter varje mindre delmängd av koden du skrivit, minimum frekvens: Efter varje ny klassdeklaration och efter varje ny skriven metod.
  - Du behöver inte använda git-branches när du jobbar ensam. Men får gärna göra det om du känner behov av det.
  - Obs! Fokusera på spellogiken - inte att göra output till terminalen överdrivet snygg (med färger etc). Låt det som är röd spelare i Fyra-i-rad representeras av “X” på spelbrädet när det “ritas ut” och gul-spelare representeras av “O”.

## Tankar om projektet.

- Det var ett spännande projekt, jag blev verkligen utmanad. Det var rätt tufft i början innan man förstod logiken i hur man skulle skriva koden. Jag testade 2 nya saker i det här projektet. 1 var att jag skrev ned delarna och försöka bryta ned stegen. Det här hjälpte mycket för att se vad behövde göras. 2, jag öppnade upp ett nytt "test" dokument där jag hade lite test miljö. Om jag inte riktigt visste hur jag skulle lösa problemen började jag där. Exempelvis när jag gjorde och jobbade med checkforwin eller computer delen, de var tuff..
- Om jag fick göra om i projektet så hade jag inte flyttat ut checkForWin & MakeYourMove till egna klasser. Detta för att när jag väl hade gjort det så tyckte jag att det kändes mer rörigt.. clean code.. kändes det inte som iallafall! Samt så hade jag och kommer nog skriva om det här projektet på eget håll, för att lära mig och se om jag förstår allt bättre.

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
