/*
 * Npm import
 */
import { connect } from 'react-redux';


/*
 * Local import
 */
import Button from 'src/components/Button';
import { vote } from 'src/store/reducer';


/*
 * Code
 */
const mapStateToProps = (state, ownProps) => {
  // On récupère la propriété qu'on a passé à mon Container dans App
  const { name } = ownProps;

  // On récupère le state qui m'intéresse
  const count = state[name];

  // On retourne les propriétés à donner au stateless component
  return {
    count,
  };
};
/* const mapStateToProps = (state, ownProps) => ({
 *   count: state[ownProps.name],
 * });
 */


const mapDispatchToProps = (dispatch, ownProps) => ({
  vote: () => {
    dispatch(vote(ownProps.name));
  },
});


/*
 * Container
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const ButtonContainer = createContainer(Button);


/*
 * Export default
 */
export default ButtonContainer;
