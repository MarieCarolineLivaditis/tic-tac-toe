import PropTypes from 'prop-types';

import './VictoriesCounter.scss';

function VictoriesCounter({ counterX, counterO }) {
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

VictoriesCounter.propTypes = {
  counterX: PropTypes.number.isRequired,
  counterO: PropTypes.number.isRequired,
};
export default VictoriesCounter;
