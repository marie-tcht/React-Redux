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
class Counter extends React.Component {
  /**
   * Render
   */
  render() {
    const { count, reset } = this.props;
    return (
      <div id="counter">
        <div id="counter-votes">{count} votes</div>
        <button id="counter-reset" onClick={reset}>Reset</button>
      </div>
    );
  }
}
Counter.propTypes = {
  count: PropTypes.number.isRequired,
  reset: PropTypes.func.isRequired,
};


/*
 * Export default
 */
export default Counter;
