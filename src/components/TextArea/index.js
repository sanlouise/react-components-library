// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

//Internals
import styles from './styles.css';

const TextArea = ({
  onChange,
  value,
  placeholder,
}) => (
  <div>
    <h2>TextArea</h2>
    <textarea
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  </div>
);

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default TextArea;
