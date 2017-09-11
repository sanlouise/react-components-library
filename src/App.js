// Dependencies
import React, { Component } from 'react';

// Internals
import logo from './logo.svg';
import './App.css';

// Externals
import Accordion from './components/Accordion';
import accordionData from './components/Accordion/data.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Accordion collapsibles={accordionData}/>
      </div>
    );
  }
}

export default App;
