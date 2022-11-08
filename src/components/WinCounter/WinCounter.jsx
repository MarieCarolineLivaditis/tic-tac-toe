import PropTypes from 'prop-types';

import './WinCounter.scss';

function WinCounter({ counterX, counterO }) {
  return (
    <section className="counter">
      <h2>Victoires</h2>
      <p>
        X : {counterX}
      </p>
      <p>
        O : {counterO}
      </p>
    </section>
  );
}

WinCounter.propTypes = {
  counterX: PropTypes.number.isRequired,
  counterO: PropTypes.number.isRequired,
};
export default WinCounter;
