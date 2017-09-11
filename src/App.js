// Dependencies
import React, { Component } from 'react';

// Internals
import logo from './logo.svg';
import './App.css';

// Components
import Accordion from './components/Accordion';
import Input from './components/Input';
import Button from './components/Button';

// Component data
import accordionData from './components/Accordion/data.js'

class App extends Component {

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
        <Input />
        <Button onButtonClick={this.onButtonClick}/>
      </div>
    );
  }
}

export default App;
