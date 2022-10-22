import PropTypes from 'prop-types';
import './PlayAgainBtn.scss';

function PlayAgainBtn({ resetGame }) {
  const handleClick = () => {
    resetGame();
  };

  return (
    <button type="button" className="btn" onClick={handleClick}>
      Rejouer
    </button>
  );
}

PlayAgainBtn.propTypes = {
  resetGame: PropTypes.func.isRequired,
};

export default PlayAgainBtn;
