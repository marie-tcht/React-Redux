/*
 * Npm Import
 */
import React from 'react';
import PropTypes from 'prop-types';


/*
 * Local Import
 */


/*
 * Component
 */
const Button = ({ name, count, vote }) => (
  <button className="button" onClick={vote} >
    {name} ({count})
  </button>
);
Button.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  vote: PropTypes.func.isRequired,
};


/*
 * Export
 */
export default Button;
