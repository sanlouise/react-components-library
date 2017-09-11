// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
// Internals
import './styles.css';

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
      this.setState({ selectedIndex: -1 });
      return;
    }
    this.setState({ selectedIndex: index });
  }

  render () {
    const { onCollapsibleClick } = this;
    const { selectedIndex } = this.state;
    const { collapsibles, toggledValue } = this.props;

    return (
      <ul className="accordion">
        <h2>Accordion</h2>
        {map(collapsibles, ({ header, body }, index) => (
          <ul className="collapsible" key={header}>
            <li
              className="header"
              onClick={() => onCollapsibleClick(index)}
            >
              {header}
            </li>
            <li className={`body ${selectedIndex === index ? 'show' : 'hidden'}`}>
              {body}
            </li>
          </ul>
        ))}
      </ul>
    );
  }
}

export default Accordion;
