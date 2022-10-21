import PropTypes from 'prop-types';

function Cell({
  value, onClick, id,
}) {
  return (
    <button type="button" id={id} className={`main-board-cell ${value === 'X' ? 'backgroundColorX' : ''} ${value === 'O' ? 'backgroundColorO' : ''}`} onClick={onClick}>
      {value}
    </button>
  );
}

Cell.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string,
  id: PropTypes.number.isRequired,
};

Cell.defaultProps = {
  value: '',
};

export default Cell;
