/*
 * Npm Import
 */
import React from 'react';
import PropTypes from 'prop-types';


/*
 * Local Import
 */
import store from 'src/store';
import { vote } from 'src/store/reducer';


/*
 * Component
 */
class Button extends React.PureComponent {
  /**
   * State
   */
  state = {}

  /**
   * Lifecycles
   */
  componentWillMount() {
    // Mettre à jour une première fois le state interne par rapport au store
    this.updateState();

    // S'abonner au store
    store.subscribe(this.updateState);
  }


  /**
   * Update
   */
  updateState = () => {
    // Récupérer le state
    const state = store.getState();

    // On récupère ce qui nous intéresse
    const { name } = this.props;
    const count = state[name];

    // On fait un nouveau render
    this.setState({ count });
  }


  /**
   * Vote
   */
  handleClick = () => {
    const { name } = this.props;

    // Dispatch
    // On récupère la fonction vote de reducer (voir import)
    store.dispatch(vote(name));
  };


  /**
   * Render
   */
  render() {
    const { name } = this.props;
    const { count } = this.state;
    return (
      <button className="button" onClick={this.handleClick} >
        {name} ({count})
      </button>
    );
  }
}
Button.propTypes = {
  name: PropTypes.string.isRequired,
};


/*
 * Export
 */
export default Button;
