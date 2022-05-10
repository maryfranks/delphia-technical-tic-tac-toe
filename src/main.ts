import inquirer from 'inquirer'



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
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });