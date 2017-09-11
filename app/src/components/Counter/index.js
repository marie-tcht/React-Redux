/*
 * Npm import
 */
import React from 'react';


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
   * State
   * @type {Object}
   */
  state = {}


  /**
   * Lifecycles
   */
  componentWillMount() {
    // Mettre à jour une première fois le state interne par rapport au store
    this.updateState();


    // S'abonner au store, pour mettre à jour les changements
    store.subscribe(this.updateState);
  }


  /*
   * Update
   */
  updateState = () => {
    // Récupérer le state
    const state = store.getState();

    // On récupère ce qui m'intéresse
    const count = state.oui + state.non;

    // On fait un nouveau render
    this.setState({ count });
  }


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
    const { count } = this.state;
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


/*
 * Export default
 */
export default Counter;
