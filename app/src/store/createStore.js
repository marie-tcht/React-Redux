
/*
 * Code
 */
const createStore = (reducer) => {
  /*
   * Initial State
   */
  let state = reducer();
  const subscribers = [];


  /*
   * Get state =  Renvoie une copie du state
   */
  const getState = () => ({ ...state });

  /*
   * Subscribe
   * enregistrer une fonction à appeler au dispatch
   * @param {Function} func
   */
  const subscribe = (func) => {
    subscribers.push(func);
  };


  /*
   * Dispatch = permet de modifier le state via une action
   * @param {object} action
   */
  const dispatch = (action) => {
    // On calcul le nouveau state
    state = reducer(state, action);

    // On appelle tous les abonnés
    // Pour chaque func de subscribers, tu exécute toutes les func()
    // subscribers.forEach(func => func());
    subscribers.forEach((subscriber) => {
      subscriber();
    });
  };


  /*
   * Return
   * = permet de récupérer le state avec getState()
   * = permet d'exécuter une action avec dispatch()
   * = permet de s'abonner avec subscribe()
   */
  return {
    getState,
    dispatch,
    subscribe,
  };
};


/*
 * Export default
 */
export default createStore;
