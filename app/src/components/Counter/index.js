/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';


/*
 * Local import
 */


/*
 * Code
 */
const Counter = ({ count, reset }) => (
  <div id="counter">
    <div id="counter-votes">{count} votes</div>
    <button id="counter-reset" onClick={reset}>Reset</button>
  </div>
);
Counter.propTypes = {
  count: PropTypes.number.isRequired,
  reset: PropTypes.func.isRequired,
};


/*
 * Export default
 */
export default Counter;
