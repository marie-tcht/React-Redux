/*
 * Npm import
 */
import { connect } from 'react-redux';


/*
 * Local import
 */
import Counter from 'src/components/Counter';


/*
 * Code
 */
// State
const mapStateToProps = state => ({
  count: state.oui + state.non,
});

// Actions
// const mapDispatchToProps = dispatch =>({
//
// });


/*
 * Container
 */
// connect(mapStateToProps, mapDispatchToProps)(Counter);
const createContainer = connect(mapStateToProps);
const CounterContainer = createContainer(Counter);


/*
 * Export default
 */
export default CounterContainer;
