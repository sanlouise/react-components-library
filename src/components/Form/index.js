// Dependencies
import React, { Component } from 'react';
// Externals
import Input from '../Input';
import TextArea from '../TextArea'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  updateInput = (field, value) => {
    this.setState({ [field]: value });
  }

  render() {
    return (
      <div>
        {/* Name field */}
        <Input
          label="Name"
          onChange={(event) => this.updateInput('name', event.target.value)}
          value={this.state.name}
        />
        {/* Email field */}
        <Input
          label="Email"
          onChange={(event) => this.updateInput('email', event.target.value)}
          value={this.state.email}
        />
        {/* Message textarea */}
        <TextArea
          label="Message"
          onChange={(event) => this.updateInput('message', event.target.value)}
          value={this.state.message}
        />
        {/* Submit button */}
        <button onClick={console.log(this.state)}>Submit</button>
      </div>
    );
  }
}

export default Form;
