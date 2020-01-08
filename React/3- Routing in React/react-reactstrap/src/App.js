import React from 'react';
import './App.css';
import Navigation from './components/Navigation'
import About from './components/About';
import {BrowserRouter,Route} from 'react-router-dom';
function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <main className="main-content-container col-lg-12 col-md-12 col-sm-12 p-0">
        <BrowserRouter> 
          <Navigation /> 
        </BrowserRouter>
        
          <BrowserRouter>
            <Route path='/about' component={About}   />
          </BrowserRouter>
        </main>
       
      </div>
      
    </div>
  );
}

export default App;
