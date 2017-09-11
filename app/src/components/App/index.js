/*
 * Npm import
 */
import React from 'react';


/*
 * Local import
 */
import Button from 'src/components/Button';
import Counter from 'src/containers/Counter';
// import store from 'src/store';


/*
 * Code
 */
/* eslint-disable */
const App = () => (
  <div id="app">
    <Counter />
    <Button name="oui" />
    <Button name="non" />
  </div>
);


/*
 * Export default
 */
export default App;
