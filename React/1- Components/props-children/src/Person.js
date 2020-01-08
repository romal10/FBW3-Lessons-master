import React from 'react'

export default function Person(props) {
    return (
        <div className="person">
            <h3>  Name : {props.name}</h3>
            <h3 className="city"> City : {props.city}</h3>
            <h3>Job :{props.job}</h3>
            <p className={props.class}> {props.children} </p>
        </div>
    )
}
