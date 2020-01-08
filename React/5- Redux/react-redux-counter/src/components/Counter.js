import React from 'react'
import './Counter.css';
export default function Counter(props) {
    return (
        <div className="Counter"  onClick={props.clicked}  >
            {props.label}
        </div>
    )
}
