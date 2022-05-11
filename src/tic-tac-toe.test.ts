import { TicTacToeGame } from './tic-tac-toe' 

describe("Class: TicTacToeGame", () => {
  describe("Instance Method: displayBoard", () => {
    it("displays human readable gameBoard", () => {
      // arrange
      const newGame = new TicTacToeGame()
      jest.spyOn(console, "log")
      // act
      newGame.displayBoard()
      // assert
      // @ts-ignore:next
      expect(console.log.mock.calls[0][0]).toMatchSnapshot()
    })
  })
})

test('test', () => {
  const newGame = new TicTacToeGame()

  jest.spyOn(console, "log")

  newGame.play()
  expect(console.log).toHaveBeenCalledWith("Welcome!");
});