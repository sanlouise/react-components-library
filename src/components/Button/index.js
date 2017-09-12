// Dependencies
import React from 'react';
import PropTypes from 'prop-types';


const Button = ({ children, onClick, type }) => (
  <button
    className="sl-button"
    onClick={onClick}
    type={type}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string.isRequired,
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
