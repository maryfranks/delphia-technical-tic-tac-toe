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
  .then((answers) => {
    console.log(answers)
    if (answers.answer === true) {
        const newGame = new TicTacToeGame()
        newGame.play()
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });