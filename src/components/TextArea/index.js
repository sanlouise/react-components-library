// Dependencies
import React from 'react';
import PropTypes from 'prop-types';


const Textarea = ({
  label,
  onChange,
  placeholder,
  value,
}) => (
  <textarea
    label={label}
    onChange={onChange}
    placeholder={placeholder}
    value={value}
  />
);

Textarea.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default Textarea;
