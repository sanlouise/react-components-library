import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Assets from './Assets/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Assets />, document.getElementById('root'));
registerServiceWorker();
