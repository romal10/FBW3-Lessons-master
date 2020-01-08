import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BootstrapApp from './BootstrapApp'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BootstrapApp />, document.getElementById('root'));
registerServiceWorker();
