// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';

class DropDown extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: -1,
    };
  }

  onDropdownClick = (index) => {
    if (this.state.selectedIndex === index) {
      return this.setState({ selectedIndex: -1 });
    }
    this.setState({ selectedIndex: index });
  }

  render() {

    const { onDropdownClick } = this;
    const { selectedIndex } = this.state;
    const { options } = this.props;

    return (
      <select className="sl-select">
        {map(options, ({ id, value, name }, index) => (
          <option 
            className="sl-option" 
            key={id}
            onClick={this.onDropdownClick}
            value={value}
          >
            {name}
          </option>
        ))}
      </select>
    )

  }

};

DropDown.propTypes = {
  onClick: PropTypes.func,
};


export default DropDown;



<select>
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
</select>