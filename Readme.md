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
9. Fix so the entered marker with promt assigns the puts in the seleced row in the array.

### Demands on asignment

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

### frågor till Thomas

1. x
