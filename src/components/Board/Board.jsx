import { useState } from 'react';
import Cell from '../Cell/Cell';

import './Board.scss';

function Board() {
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

  // const [winner, setWinner] = useState(null);

  const handleClick = (event) => {
    event.preventDefault();
    const targetId = Number(event.target.id);
    const square = board.find((item) => item.id === targetId);
    if (isX === true) {
      square.value = 'X';
    } else {
      square.value = 'O';
    }
    setBoard([...board]);
    setIsX(!isX);
  };

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
