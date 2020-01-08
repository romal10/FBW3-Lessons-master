import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, { Person } from './App';
import Todo from './todo/todo';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App name="Mansour" city="Hamburg" />, document.getElementById('root'));
ReactDOM.render(<Person name="Rania" job="Web Developer" />, document.getElementById('persons'));


let list = (
    <div>
        <Person name="AMIT" job="C ++ Developer" />
        <Person name="AHMAD " job="CSS Developer" />
        <Person name="Waleska " job="SCSS Developer" />

    </div>
);
ReactDOM.render(list, document.getElementById('list'));
ReactDOM.render(<Todo />, document.getElementById('todo'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
