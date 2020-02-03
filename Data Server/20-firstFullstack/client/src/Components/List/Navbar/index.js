import React from 'react'
import {Link} from 'react-router-dom';
export default function index() {
    return (
        <div className="container"> 
                <div className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link to= '/' className="navbar-brand">
                        Home
                    </Link>
                    <div>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/list" className="nav-link">
                                    Movie list
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/newMovie" className="nav-link">
                                    Add review
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    )
}
