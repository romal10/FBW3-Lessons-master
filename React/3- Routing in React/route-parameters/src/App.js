import React, { Component } from 'react'
import {BrowserRouter, Route , Link } from 'react-router-dom'
import './App.css'
// the component for route
const Child = ({match}) => 
 console.log('match is : ' , match) ||
 ( 
   <div >
     <h3> the name is  : {match.params.name} </h3>
   </div>

 )
 

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
         <div >
           <h1> Social Media Links</h1>
           <ul>
             <li><Link to='/facebook'>Facebook</Link></li>
             <li><Link to='/instagram'>Instagram</Link></li>
             <li><Link to='/twitter'> Twitter</Link></li>
             <li><Link to='/linkedin'>Linkedin</Link></li>
           </ul>
           <br/>
           <Route path='/:name' component={Child}  />
         </div>
      </BrowserRouter>
    )
  }
}
