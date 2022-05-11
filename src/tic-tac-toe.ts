import inquirer from "inquirer"

const instructions = "Please enter a valid, empty game board square by entering \nthe desired row, followed by a `.`, \nand then the column number. For example: Row 1, column 2: 1.2"

export class TicTacToeGame {
    gameBoard: GameBoard
    activePlayer: Player 

    constructor() {
        this.gameBoard = [[null, null, null], [null, null, null], [null, null, null]]
        this.activePlayer = 1
    }

    async play() {
        console.log("Welcome!")
        console.log(instructions)
        this._displayBoard()
        do {
            await this.takeTurn()
            // without the new line, the game board prints misaligned
            console.log("\n")
        } while (this.hasWinner(this.gameBoard) === false)
    }
    
    _displayBoard() {
        // to do: the displayboard should be its own class
        // to do: convert to map(parseRow) and add parse methods for rows and cells
        const parsedBoard = this.gameBoard.map((row) => {
            return row.map((cell) => {
                if (cell === 1) {
                    return "X"
                } else if (cell === 2) {
                    return "O"
                } 
                return ""
            })
        })
        console.table(parsedBoard)
    }
    
    async takeTurn() {
        // marker = 1 for player X (player 1) and 2 for player Y (player 2)
        let marker = 2
        console.log(marker)
        if (this.activePlayer === 1) {
            console.log(marker)
            marker = 1
            this.activePlayer = 2
        } else {this.activePlayer = 1}
        
        const parsePlayerName = (player: number): string => {
            if (marker === 1) {
                return "X"
            } else {return "Y"}
        }
        
        return inquirer.prompt([
            // to do: validate data - input must be an empty cell
            {
                type: 'input',
                name: 'move',
                message: `Player ${parsePlayerName(marker)}, please enter your move:\n`,
                validate(value) {
                    const pass = value.match(
                        /([1-3])\.([1-3])/
                        )
                        if (pass) {
                            return true
                        }
                        
                        return instructions
                    },
                }
            ]).then((answers) => {
                console.log(answers)
                const stringToArray = answers.move.split(".")
                const row = (stringToArray[0] - 1)
                const column = (stringToArray[1] - 1)
                console.log(`Row: ${row}, Column ${column}`)
                this.gameBoard[row][column] = marker
                this._displayBoard()
          })
          .catch((error) => {
            throw(error)
        })
    }

    hasWinner(gameBoard: GameBoard) {
        for (const row of this.gameBoard) {
            if (row[0] && row[1] && row[2] === 1) {
                console.log("Player X wins!")
                return true
            }
          }
        return false
    }
}

type Row = Array<Cell>
type Cell = Number| null
type GameBoard = Array<Row>
type Player = Number