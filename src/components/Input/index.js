// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

//Internals
import styles from './styles.css';

const Input = ({
  label,
  onChange,
  textarea,
  value,
}) => (
  <div>
    <h2>Input</h2>
    <input
      onChange={onChange}
      value={value}
      placeholder={label}
    />
  </div>
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
