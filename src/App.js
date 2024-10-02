import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentPlayer, setCurrentPlayer] = useState('X');

  const board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

  return (
    <div className="App">
      <div className="game-board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="board-row">
            {row.map((cell, cellIndex) => (
              <div key={cellIndex} className="board-cell">
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
