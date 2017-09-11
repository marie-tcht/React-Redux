/*
 * Npm import
 */
import { connect } from 'react-redux';


/*
 * Local import
 */
import Counter from 'src/components/Counter';
import { reset } from 'src/store/reducer';


/*
 * Code
 */
// State
const mapStateToProps = state => ({
  count: state.oui + state.non,
});

// Actions
const mapDispatchToProps = dispatch => ({
  reset: () => {
    // On dispatch l'action
    // On récupère la fonction reset de reducer (voir import)
    dispatch(reset());
  },
});


/*
 * Container
 */
// connect(mapStateToProps, mapDispatchToProps)(Counter);
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const CounterContainer = createContainer(Counter);


/*
 * Export default
 */
export default CounterContainer;
