// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

//Internals
import styles from './styles.css';

const Button = ({ onButtonClick }) => (
  <div>
    <h2>Button</h2>
    <button onButtonClick={onButtonClick}>Click me</button>
  </div>
);

Button.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default Button;
