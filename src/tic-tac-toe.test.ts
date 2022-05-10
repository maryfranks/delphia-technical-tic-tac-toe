import { TicTacToeGame } from './tic-tac-toe' 

test('test', () => {
  const newGame = new TicTacToeGame()

  jest.spyOn(console, "log")

  newGame.play()
  expect(console.log).toHaveBeenCalledWith("Welcome!");
});