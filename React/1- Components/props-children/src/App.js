import React from 'react';
import Person from './Person';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Props Children</h1>
      <Person class="green"  name="Mansour" city="Hamburg" job="React Developer" >
        My name is Mansour and living in Hamburg 
      </Person>

      <Person  name="Sebastian" city="Berlin" job="PHP Developer" />

      <Person  name="John" city="Hamburg" job="Student" />

      <Person class="blue"  name="Romal" city="Hamburg" job="Python Developer" > 
           
                <h4> My name is Romal and my job is Python   </h4>
                <h4> i like Javascript</h4>
          
      </Person>

     
    </div>
  );
}

export default App;
