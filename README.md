# Tic Tac Toe

## Overview

Command Line Tic Tac Toe Game written in TypeScript

### Some Notes

The game currently accepts moves from both players and records them in the gameboard, however there is only one win condition (three Xs along the top row). At the 2 hour mark I was trying to test the `takeTurn` method but I realized that it needed to be refactored significantly before I would be able to test it. I decided that I wanted the game to function at least a little, so I added a single win condition to the `hasWinner` method, to get the game loop working properly. The roadmap below shows the next steps.

## Playing the game

To play the game, you must have nodejs 16.15.0 installed. To install node, visit https://nodejs.org/en/

With node installed, run:

`npm install`

To begin the game, run:

`npm start`

and follow the directions in the prompts to play the game.

To run the test suite, use:

`npx jest`

## Roadmap

_include tests throughout_

- [x] program should take command line input
- [x] implement tic tac toe game class
  - [x] take a turn
  - [x] display a board
  - [x] store state
  - [x] start a new game
  - [x] evaluate win condition
- [x] program should exit at game end
- [ ] make custom types for inquierer answers to avoid using `any` (both in main.js and in the tic tac toe class)
- [ ] offer to start new game when game is over
- [ ] redraw game board on each move
- [ ] improve error handling
- [ ] improve test coverage
  - [ ] refactor take turn (not testable currently)
- [ ] improve game board appearance
- [ ] the displayboard should be its own class
  - [ ] add individual methods for parsing rows and cells to make code easier to test
- [ ] validate data - input must be an empty cell
