// Dependencies
import React, { Component } from 'react';

// Internals
import logo from './logo.svg';
import './App.css';

// Components
import Accordion from './components/Accordion';
import Button from './components/Button';
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

  onButtonClick = (event) => {
    console.log("Clicked")
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the React Component Library</h2>
        </div>
        <Accordion collapsibles={accordionData}/>
        <Input placeholder={this.state.inputPlaceholder}/>
        <TextArea  placeholder={this.state.textAreaPlaceholder}/>
        <Button onButtonClick={this.onButtonClick}/>
      </div>
    );
  }
}

export default App;
