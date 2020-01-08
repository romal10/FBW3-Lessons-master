import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// redux specific imports
import reducer from './reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// create a store
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
