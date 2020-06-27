import React from 'react'
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
} from '@material-ui/core'

function App() {
  return (
    <div className="gameContainer">
      <div className="intro">
        <div>
          <h2>Game of Life</h2>
          <p>Game of Life description</p>
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
