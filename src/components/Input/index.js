// Dependencies
import React from 'react';
import PropTypes from 'prop-types';


const Input = ({
  label,
  onChange,
  value,
  placeholder
}) => (
  <input
    className="sl-input"
    onChange={onChange}
    value={value}
    placeholder={placeholder}
  />
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
};

export default Input;
