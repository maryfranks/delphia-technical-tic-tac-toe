import { TicTacToeGame } from './tic-tac-toe' 

describe("Class: TicTacToeGame", () => {
  describe("Instance Method: play", () => {
    it("welcomes players at game start", () => {

      // arrange
      const newGame = new TicTacToeGame()
      jest.spyOn(console, "log")
    
      // act
      newGame.play()

      // assert
      expect(console.log).toHaveBeenCalledWith("Welcome!");
    })
  })
  describe("Instance Method: displayBoard", () => {
    it("displays human readable gameBoard", () => {

      // arrange
      const newGame = new TicTacToeGame()
      jest.spyOn(console, "log")

      // act
      newGame._displayBoard()

      // assert
      // @ts-ignore:next
      expect(console.log.mock.calls[0][0]).toMatchSnapshot()
    })
  })
  describe("Instance Method: takeTurn", () => {
    it("should parse player name", () => {
      // arrange
      // act
      // assert
    })
    it("should update the gameboard with a marker", () => {
      // arrange
      // act
      // assert
    })
  })
  describe("Instance Method: hasWinner", () => {
    it("should continue the game if no one has won", () => {
      // arrange
      // act
      // assert
    })
    it("should correctly evaluate win condition(s)", () => { // this is probably more than one test
      // arrange
      // act
      // assert
    })
  })
})