// Dependencies
import React, { Component } from 'react';
// Components
import Accordion from '../components/Accordion';
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';
import Form from '../components/Form';
import Input from '../components/Input';
import Textarea from '../components/Textarea';
import Pagination from '../components/Pagination';
import Slider from '../components/Slider';
// Component Data
import accordionData from './data/accordion';
import paginationData from './data/pagination';
//Component Documentation
import accordionDocs from './documentation/accordion';
import buttonDocs from './documentation/button';
import checkboxDocs from './documentation/checkbox';
import formDocs from './documentation/form';
import inputDocs from './documentation/input';
import textareaDocs from './documentation/textarea';
import paginationDocs from './documentation/pagination';
// Internals
import logo from './logo.svg';
import './styles.scss';


class Assets extends Component {
  constructor() {
    super();
    this.state = {
      inputPlaceholder: "Input field",
      textAreaPlaceholder: "Text field",
      value: 10
    }
  }

  onClick = (event) => {
    console.log("Clicked");
  }

  onSliderChange = (event) => {
    this.setState({ value: event.target.value } )
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
          <Accordion className="sl-documentation" collapsibles={accordionDocs} />
        </div>

        <div className="Gradient-grey">
          <h2>Button</h2>
          <Button onClick={this.onClick}>I'm a button!</Button>
          <Accordion className="sl-documentation" collapsibles={buttonDocs} />
        </div>

        <div className="Gradient-grey">
          <h2>Input</h2>
          <Input label="Some Input" placeholder={this.state.inputPlaceholder} />
          <Accordion className="sl-documentation" collapsibles={inputDocs} />
        </div>

        <div className="Gradient-grey">
          <h2>Checkbox</h2>
          <Checkbox />
        </div>

        <div className="Gradient-grey">
          <h2>Textarea</h2>
          <Textarea label="I'm a textarea!" placeholder={this.state.textAreaPlaceholder} />
          <Accordion className="sl-documentation" collapsibles={textareaDocs} />
        </div>

        <div className="Gradient-grey">
          <h2>Form</h2>
          <Form onSubmit={() => { console.log('form submitted!'); }}>
            <Input label="Name" placeholder="name" />
            <Input label="Email" placeholder="email" />
            <Button type="submit">Click me!</Button>
          </Form>
          <Accordion className="sl-documentation" collapsibles={formDocs} />
        </div>

        <div className="Gradient-grey">
          <h2>Pagination</h2>
          <Pagination data={paginationData}/>
          <Accordion className="sl-documentation" collapsibles={paginationDocs} />
        </div>

        <div className="Gradient-grey">
          <h2>Slider</h2>
          <Slider
            max={20}
            min={0}
            value={this.state.value}
            onChange={this.onSliderChange} />
          <Accordion className="sl-documentation" collapsibles={paginationDocs} />
        </div>

      </div>
    );
  }
}

export default Assets;
