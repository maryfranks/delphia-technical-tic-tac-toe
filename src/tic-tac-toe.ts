export class TicTacToeGame {
    constructor() {
        this.gameBoard = [[null, null, null], [null, null, null], [null, null, null]]
    }

    gameBoard: GameBoard

    play() {
        console.log("Welcome!")
        this.displayBoard()
    }

    displayBoard() {
        const parsedBoard = this.gameBoard.map((row) => {
            return row.map((cell) => {
                if (cell === 1) {
                    return "X"
                } else if (cell === 0) {
                    return "O"
                } 
                return ""
            })
        })
        console.table(parsedBoard)
    }
}

type Row = Array<Cell>
type Cell = Number| null
type GameBoard = Array<Row>