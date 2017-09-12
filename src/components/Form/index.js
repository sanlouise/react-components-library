// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Form extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit();
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        {this.props.children}
      </form>
    );
  }
}

export default Form;
