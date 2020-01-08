import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Navigator extends Component {
    render() {
        return (
            <div>
            <h3> React Router </h3>
            <ul>
                <li> 
                <Link to={'/about'} >About us</Link>
                </li>
                <li>
                <Link to={'/'} > Home   </Link>
                </li>
            </ul>
            </div>
        )
    }
}
