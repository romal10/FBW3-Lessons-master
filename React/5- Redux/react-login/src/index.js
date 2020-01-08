import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers';
import { saveState } from './Storage';

const redux_store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

redux_store.subscribe( ()=> {
    //console.log('subscribe function is there')
    console.log(redux_store.getState());
    saveState(redux_store.getState());
    
})

ReactDOM.render(<Provider store = {redux_store} ><App />
</Provider>
    , document.getElementById('root'));

