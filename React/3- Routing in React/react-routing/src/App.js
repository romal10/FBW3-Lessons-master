import React from 'react';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Error from './components/Error';
import Navigator from './components/Navigator';






function App() {
  return (
    <BrowserRouter>
      <Navigator />
      <Switch>
          <Route path="/" component={Home}  exact />
          <Route path="/about" component={About}  />  
          <Route component={Error} />  
        </Switch>
    </BrowserRouter>
  );
}

export default App;
