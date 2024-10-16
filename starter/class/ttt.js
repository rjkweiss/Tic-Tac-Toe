const Screen = require("./screen");
const Cursor = require("./cursor");

class TTT {

  constructor() {

    this.playerTurn = "O";

    this.grid = [[' ',' ',' '],
                 [' ',' ',' '],
                 [' ',' ',' ']]

    this.cursor = new Cursor(3, 3);

    // Initialize a 3x3 tic-tac-toe grid
    Screen.initialize(3, 3);
    Screen.setGridlines(true);

    // Replace this with real commands
    Screen.addCommand('t', 'test command (remove)', TTT.testCommand);

    Screen.render();
  }

  // Remove this
  static testCommand() {
    console.log("TEST COMMAND");
  }

  static checkWin(grid) {
    // check horizontal and vertical wins
    for (let idx = 0; idx < grid.length; idx++) {
      if (grid[idx][0] === grid[idx][1] && grid[idx][1] === grid[idx][2] && grid[idx][0] !== " ") {
        return grid[idx][0];
      }

      // check cols
      if (grid[0][idx] === grid[1][idx] && grid[1][idx] === grid[2][idx] && grid[0][idx] !== " ") {
        return grid[0][idx];
      }
    }
    // check diagonals (top left to bottom right)
    if(grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2] && grid[0][0] !== " ") {
      return grid[0][0];
    }

    // check diagonals (top right to bottom left)
    if(grid[0][2] === grid[1][1] && grid[1][1] === grid[2][0] && grid[0][2] !== " ") {
      return grid[0][2];
    }

    // check for tie
    if (grid.flat().every(cell => cell != " ")) {
      return "T";
    }

    // Return false if the game has not ended
    return false;

  }

  static endGame(winner) {
    if (winner === 'O' || winner === 'X') {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === 'T') {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }

}

module.exports = TTT;
