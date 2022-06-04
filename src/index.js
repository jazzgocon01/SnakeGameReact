import React from 'react';
import ReactDOM from 'react-dom';
import SnakeGame from './SnakeGame.js'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <h1>SNAKE GAME</h1>
    <div className="textWrapper">
     
      <p id="instructions">Use the arrow keys or W/A/S/D to play</p>
      <p className="subTitle"></p>
    </div>
    <SnakeGame />
  </React.StrictMode>,
  document.getElementById('root')
);