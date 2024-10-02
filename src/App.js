import React, { useState } from 'react';
import './App.css';

function App() {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (board[index] === '' && !winner) {
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
      
      const gameWinner = calculateWinner(newBoard);
      if (gameWinner) {
        setWinner(gameWinner);
      } else if (newBoard.every(cell => cell !== '')) {
        setWinner('Draw');
      } else {
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
      }
    }
  };

  const calculateWinner = (board) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    for (let line of lines) {
      const [a, b, c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(''));
    setCurrentPlayer('X');
    setWinner(null);
  };

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <div className="game-board">
        {board.map((cell, index) => (
          <div key={index} className="board-cell" onClick={() => handleClick(index)}>
            {cell}
          </div>
        ))}
      </div>
      {winner && (
        <div className="game-over">
          {winner === 'Draw' ? "It's a draw!" : `Player ${winner} wins!`}
          <button onClick={resetGame}>Play Again</button>
        </div>
      )}
      {!winner && (
        <div className="current-player">
          Current player: {currentPlayer}
        </div>
      )}
    </div>
  );
}

export default App;
