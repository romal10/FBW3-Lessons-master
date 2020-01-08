import React from 'react'

export default function Inputfield(props) {
    return (
        <div>
            <input type="text" onChange={props.change}></input>
            <button onClick={props.click}>Search</button>
        </div>
    )
}
