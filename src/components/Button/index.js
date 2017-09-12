// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

//Internals
import styles from './styles.css';

const Button = ({ onClick }) => (
  <div>
    <button onClick={onClick}>Click me</button>
  </div>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
