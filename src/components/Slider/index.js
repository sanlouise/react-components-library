// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

const Slider = ({
  max,
  min,
  onChange,
  value,
}) => (
  <input
    className="sl-slider"
    max={max}
    min={min}
    onChange={onChange}
    type="range"
    value={value}
  />
);

Slider.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  max: PropTypes.string.isRequired,
  min: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Slider;