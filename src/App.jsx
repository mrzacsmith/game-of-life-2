import React, { useState } from 'react'
import GameLogic from './components/GameLogic'
import './App.css'
import {
  Button,
  DialogTitle,
  TextField,
  DialogActions,
  Dialog,
  DialogContent,
  DialogContentText,
  ListItemText,
  List,
  ListItem,
} from '@material-ui/core'

function App() {
  const [initalGameState, setInitialGameState] = useState({
    game: new GameLogic(),
    size: [50, 50],
    gameRunning: false,
    gameInteral: 100,
    open: false,
  })

  const { game, size, gameRunning, gameInteral, open } = initalGameState

  // game controls to start, stop, run, renderGame
  const startGame = () => {
    // if(!this.ga)
  }

  const stopGame = () => {}

  const runGame = () => {}

  const renderGame = () => {
    let newGame = []
    let cellRow = []

    for (let i = 0; i < size[0]; i++) {
      for (let j = 0; j < size[1]; j++) {}
    }
  }

  // change handlers for row, column, gameInterval, open, close
  const handleChangeRow = (e) => {}

  const handleChangeCol = (e) => {}

  const changeGameInterval = (e) => {}

  const handleOpen = () => {}

  const handleClose = () => {}

  // cell functions
  const storeCell = (position) => {}

  return (
    <div className="gameContainer">
      <div className="intro">
        <div>
          <h2>Game of Life</h2>
          <p>
            Following John von Neumann's definition of life as a creation that
            can be reproduce itself, John Conway began to experiment with
            two-dimensional cellular automation rules.{' '}
          </p>
          <List>
            <p>Game Rules</p>
            <ListItem button>
              <ListItemText style={{ color: 'black', textAlign: 'center' }}>
                Any live cell with two or three live neighbours survives..
              </ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemText style={{ color: 'black', textAlign: 'center' }}>
                Any dead cell with three live neighbours becomes a live cell.
              </ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemText style={{ color: 'black', textAlign: 'center' }}>
                All other live cells die in the next generation. Similarly, all
                other dead cells stay dead.
              </ListItemText>
            </ListItem>
          </List>
        </div>
        {/* End of intro */}
      </div>
      <div className="gameSettings">Settings:</div>
      <div className="header">
        <div className="top">
          <Button className="buttons">Settings</Button>
          <Dialog>
            <DialogTitle>Settings</DialogTitle>
            <DialogContent>
              <DialogContentText>
                <TextField />
                <TextField />
                <TextField />
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button>Save</Button>
              <Button>Cancel</Button>
            </DialogActions>
          </Dialog>
          <Button>Start</Button>
          <Button>Stop</Button>
          {/* End of top */}
        </div>
        <div className="generation">Generation:</div>
        <div className="gameBoardContainer"></div>

        {/* End of header */}
      </div>

      {/* End of gameContainer */}
    </div>
  )
}

export default App
