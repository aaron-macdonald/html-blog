document.addEventListener('DOMContentLoaded', startGame)

function startGame () {
  boardSize = document.getElementById("selector").value
  board = new createBoard(boardSize)
  setSurroundingMines()
  addEventListeners ()
  lib.initBoard()
}

function createBoard(boardSize){
  var len = boardSize
  this.cells = []
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len; j++) {
      this.cells.push(
        {row: i, col: j, isMine: (Math.random() >=0.80), hidden:true}
      )
    }
  }
}

function setSurroundingMines() {
  for (var i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
  }
}

function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
  var len = surrounding.length
  var count = 0
  for (var i = 0; i < len; i++) {
    if(surrounding[i].isMine) {
      count++
    }
  }
  return count
}

function addEventListeners (){
  document.addEventListener('click', checkForWin)
  document.addEventListener('contextmenu', checkForWin)
  document.getElementById("button").addEventListener("click", resetBoard)

}

function checkForWin () {
  for (var i=0; i<board.cells.length; i++) {
    if (board.cells[i].isMine && !board.cells[i].isMarked) {
      return
    }
    else if (!board.cells[i].isMine && board.cells[i].hidden) {
      return
    }
  }
  lib.displayMessage('You win!')
}

function resetBoard () {
  document.getElementById("board").innerHTML="";//Clears the board
  startGame()
}
