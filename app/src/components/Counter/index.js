/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';


/*
 * Local import
 */
import store from 'src/store';
import { reset } from 'src/store/reducer';


/*
 * Code
 */
class Counter extends React.Component {
  /**
   * Handle Reset
   */
  handleReset = () => {
    // On dispatch l'action
    // On récupère la fonction reset de reducer (voir import)
    store.dispatch(reset());
  }


  /**
   * Render
   */
  render() {
    const { count } = this.props;
    return (
      <div id="counter">
        <div id="counter-votes">{count} votes</div>
        <button
          id="counter-reset"
          onClick={this.handleReset}
        >
          Reset
        </button>
      </div>
    );
  }
}
Counter.propTypes = {
  count: PropTypes.number.isRequired,
};


/*
 * Export default
 */
export default Counter;
