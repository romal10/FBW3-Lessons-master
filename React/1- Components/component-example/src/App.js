import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(info) {
  return (
    <div className="App">
      <h1>Hello from React APP</h1>
      <p>{info.name}</p>
      <h2>{info.city}</h2>
    </div>
  );
}

function Person(props) {
  return (
    <div className="person">
      <h3>{props.name}</h3>
      <p>{props.job}</p>
      <p>the age : {parseInt(Math.random() * (35 - 20 + 1) + 20)} </p>
    </div>  // Math.random() * (max - min + 1) + min)

  );
}


export default App;
export { Person };

