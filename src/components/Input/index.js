// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

//Internals
import styles from './styles.css';

const Input = ({
  label,
  onChange,
  value,
  placeholder
}) => (
  <div>
    <h2>Input</h2>
    <input
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  </div>
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Input;
