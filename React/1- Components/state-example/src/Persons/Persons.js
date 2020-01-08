import React from 'react';
import '../App.css'


const Persons = (props) =>{

    return(
        <div className="person">
            <h1 className={props.class}>{props.name}</h1>
            <p>age: {props.age}</p>
            <p>job: {props.job}</p>
        </div>
    );
}

export default Persons;