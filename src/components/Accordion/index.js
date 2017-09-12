// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';


class Accordion extends Component {
  static propTypes = {
    collapsibles: PropTypes.arrayOf(PropTypes.shape({
      header: PropTypes.node.isRequired,
      body: PropTypes.node.isRequired,
    })).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: -1,
    };
  }

  onCollapsibleClick = (index) => {
    if (this.state.selectedIndex === index) {
      return this.setState({ selectedIndex: -1 });
    }
    this.setState({ selectedIndex: index });
  }

  render () {
    const { onCollapsibleClick } = this;
    const { selectedIndex } = this.state;
    const { collapsibles } = this.props;

    return (
      <ul className="sl-accordion hello">
        {map(collapsibles, ({ header, body }, index) => (
          <ul
            className="sl-collapsible"
            key={header}
          >
            <li
              className="sl-header"
              onClick={() => onCollapsibleClick(index)}
            >
              {header}
            </li>
            <li className={`sl-body ${selectedIndex === index ? 'show' : 'hidden'}`}>
              {body}
            </li>
          </ul>
        ))}
      </ul>
    );
  }
}

export default Accordion;
