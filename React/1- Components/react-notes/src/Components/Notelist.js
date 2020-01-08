import React from 'react'

function Note(props) {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.text.substring(0,20)}...</p>
        </div>
    )
}


export default function Notelist(props) {
    let list = props.list;
    return (
        list.map((item) => {
            return(
                <Note name={item.name} text={item.text} />
            )
        })
    )
}
