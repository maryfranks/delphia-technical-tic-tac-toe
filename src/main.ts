import inquirer from 'inquirer'
import { TicTacToeGame } from './tic-tac-toe'

inquirer
  .prompt([
      {
        type: "confirm",
        message: 'Shall we play a game?',
        name: 'answer',
      }
    /* Pass your questions in here */
  ])
  .then((input) => {
    console.log(input)
    if (input.answer === true) {
        const newGame = new TicTacToeGame()
        newGame.play()
    }
  })
  .catch((error) => {
    throw(error)
  });