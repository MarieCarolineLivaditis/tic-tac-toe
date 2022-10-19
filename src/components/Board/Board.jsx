/* eslint-disable no-else-return */
import { useState, useEffect } from 'react';
import Cell from '../Cell/Cell';

import './Board.scss';

function Board() {
  const winningPatterns = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
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
    let symbol;
    if (!isX) {
      symbol = 'X';
    } else {
      symbol = 'O';
    }
    const filteredValue = board.filter((item) => item.value === symbol);
    console.log(filteredValue);
    const filteredValueId = filteredValue.map((item) => item.id);
    console.log(filteredValueId);
    winningPatterns.filter((item) => {
      if (JSON.stringify(filteredValueId) === JSON.stringify(item)) {
        setWinner(true);
      }
      return winner;
    });
  }

  useEffect(() => {
    checkWinner();
  });
  console.log(winner);

  return (
    <div className="main-board">
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
