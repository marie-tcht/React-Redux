
/*
 * Code
 */
const initialState = {
  oui: 0,
  non: 0,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // Incrémenter les votes
    case 'VOTE': {
      const { name } = action;
      return {
        ...state,
        [name]: state[name] + 1,
      };
    }

    // Reset
    case 'RESET':
      return initialState;

    default:
      // Action non reconnue = on ne fait rien
      // Retourne le state par défault
      return state;
  }
};

// ACTION CREATOR
export const vote = name => ({
  type: 'VOTE',
  name,
});

export const reset = () => ({
  type: 'RESET',
});


/*
 * Export default
 */
export default reducer;
