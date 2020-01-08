import React from 'react'

export default function Inputfield(props) {

    return (
        <div>
            <input className="infield" type="text" onChange={props.change} />
            <button className="btn" onClick={props.click}>Search</button>

        </div>
    )
}
