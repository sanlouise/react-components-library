import React from 'react';
import ReactDOM from 'react-dom';
import Assets from './Assets';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Assets />, div);
});
