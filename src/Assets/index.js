// Dependencies
import React, { Component } from 'react';
// Components
import Accordion from '../components/Accordion';
import Button from '../components/Button';
import Form from '../components/Form';
import Input from '../components/Input';
import Textarea from '../components/Textarea';
// Component Data
import accordionData from './data/accordion';
// Internals
import logo from './logo.svg';
import './styles.scss';


class Assets extends Component {
  constructor() {
    super();
    this.state = {
      inputPlaceholder: "Input field",
      textAreaPlaceholder: "Text field"
    }
  }

  onClick = (event) => {
    console.log("Clicked");
  }

  render() {
    return (
      <div className="Assets">
        <div className="Assets-header">
          <h2>Welcome to the React Component Library</h2>
          <img src={logo} className="Assets-logo" alt="logo" />
        </div>

        <div className="Gradient-grey">
          <h2>Accordion</h2>
          <Accordion collapsibles={accordionData} />
        </div>

        <div className="Gradient-grey">
          <h2>Button</h2>
          <Button onClick={this.onClick}>I'm a button!</Button>
        </div>

        <div className="Gradient-grey">
          <h2>Input</h2>
          <Input label="Some Input" placeholder={this.state.inputPlaceholder} />
        </div>

        <div className="Gradient-grey">
          <h2>Textarea</h2>
          <Textarea label="I'm a textarea!" placeholder={this.state.textAreaPlaceholder} />
        </div>

        <div className="Gradient-grey">
          <h2>Form</h2>
          <Form onSubmit={() => { console.log('form submitted!'); }}>
            <Input label="Name" placeholder="name" />
            <Input label="Email" placeholder="email" />
            <Button type="submit">Click me!</Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Assets;
