import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import List from './Components/List';
import NewMovie from './Components/NewMovie';


export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/list" exact>
            <List/>
            <Route path="/newReview" exact>
              <NewMovie/>
            </Route>
          </Route>
        </Switch>    
      </Router>
    )
  }
}

