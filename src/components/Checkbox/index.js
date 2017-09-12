// Dependencies
import React from 'react';
import PropTypes from 'prop-types';


const Checkbox = ({ onClick}) => (
  <input
    className="sl-checkbox"
    onClick={onClick}
    type="checkbox"
   />
);

Checkbox.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

Checkbox.defaultProps = {
  type: 'checkbox',
};

export default Checkbox;
