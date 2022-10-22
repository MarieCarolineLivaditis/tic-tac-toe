/* eslint-disable no-else-return */
import PropTypes from 'prop-types';
import Cell from '../Cell/Cell';

import './Board.scss';

function Board({
  changeTurn, changeBoard, board, winner, isX,
}) {
  const handleChange = (event) => {
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
    }
    changeBoard();
    changeTurn();
  };
  return (
    <div className="main-board">
      <div className="main-board-cellContainer">
        {board.map((item) => (
          <Cell
            key={item.id}
            id={item.id}
            onClick={handleChange}
            value={item.value}
          />
        ))}
      </div>
    </div>
  );
}

Board.propTypes = {
  changeTurn: PropTypes.func.isRequired,
  changeBoard: PropTypes.func.isRequired,
  board: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.string,
    }).isRequired,
  ).isRequired,
  winner: PropTypes.bool.isRequired,
  isX: PropTypes.bool.isRequired,
};

export default Board;
