/* eslint-disable no-else-return */
import { useState, useEffect } from 'react';
import Cell from '../Cell/Cell';

import './Board.scss';

function Board() {
  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const [board, setBoard] = useState([
    {
      id: 1,
      value: '',
    },
    {
      id: 2,
      value: '',
    },
    {
      id: 3,
      value: '',
    },
    {
      id: 4,
      value: '',
    },
    {
      id: 5,
      value: '',
    },
    {
      id: 6,
      value: '',
    },
    {
      id: 7,
      value: '',
    },
    {
      id: 8,
      value: '',
    },
    {
      id: 9,
      value: '',
    },
  ]);
  const [isX, setIsX] = useState(true);
  const [winner, setWinner] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    const targetId = Number(event.target.id);
    const square = board.find((item) => item.id === targetId);
    if (winner) {
      return;
    }
    if (square.value === '' || square.value === undefined) {
      if (isX === true) {
        square.value = 'X';
      } else {
        square.value = 'O';
      }
      setBoard([...board]);
      setIsX(!isX);
    }
  };

  const checkWinner = () => {
    winningPatterns.map((item) => {
      const [a, b, c] = item;
      if ((board[a].value !== '' && board[a].value !== undefined) && board[a].value === board[b].value && board[a].value === board[c].value) {
        console.log(board[a].value, board[b].value, board[b].value);
        setWinner(true);
      }
      return item;
    });
  };

  useEffect(() => {
    checkWinner();
  });

  return (
    <div className="main-board">
      {winner && 'Vous avez gagné !'}
      <div className="main-board-cellContainer">
        {board.map((item) => (
          <Cell
            key={item.id}
            id={item.id}
            onClick={handleClick}
            value={item.value}
          />
        ))}
      </div>
    </div>
  );
}

export default Board;
