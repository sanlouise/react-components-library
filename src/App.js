// Dependencies
import React, { Component } from 'react';

// Internals
import logo from './logo.svg';
import './App.css';

// Components
import Accordion from './components/Accordion';
import Button from './components/Button';
import Form from './components/Form';
import Input from './components/Input';
import TextArea from './components/TextArea';

// Component data
import accordionData from './components/Accordion/data.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputPlaceholder: "Input field",
      textAreaPlaceholder: "Text field"
    }
  }

  onClick = (event) => {
    console.log("Clicked")
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to the React Component Library</h2>
          <img src={logo} className="App-logo" alt="logo" />
        </div>

        <div className="Gradient-grey">
          <h2>Accordion</h2>
          <Accordion collapsibles={accordionData} />
        </div>

        <div className="Gradient-grey">
          <h2>Button</h2>
          <Button onClick={this.onClick} />
        </div>

        <div className="Gradient-grey">
          <h2>Input</h2>
          <Input placeholder={this.state.inputPlaceholder} />
        </div>

        <div className="Gradient-grey">
          <h2>Textarea</h2>
          <TextArea placeholder={this.state.textAreaPlaceholder} />
        </div>

        <div className="Gradient-grey">
          <h2>Form</h2>
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
