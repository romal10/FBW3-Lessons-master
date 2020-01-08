import React, { Component } from 'react'
import './App.css';
import {BrowserRouter,Route,NavLink,Switch} from 'react-router-dom'
import Home from './components/Home'
import Registration from './components/Registration'
import Login from './components/Login'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <h1>Welcome to the registration/login App!</h1>
          <NavLink to='/Registration'>Registration</NavLink>
          <NavLink to='/Login'>Login</NavLink>
        </div>
        <div className='App'>
          <Switch>
            <Route path='/Registration'>
                <Registration />
            </Route>
            <Route path='/Login'>
                <Login />
            </Route>
            <Route path='/Home'>
                <Home />
            </Route>
            <Route path='/'>
              <h1>Click registration or login to enter home</h1>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
