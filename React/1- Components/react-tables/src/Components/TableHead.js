import React from 'react'
import '../App.css'


const TableHead = (props) => {
    let header = Object.keys(props.row)
    return (
        <>
        <th className="theader" >{header[0].toUpperCase()}</th>
        <th className="theader" >{header[1].toUpperCase()}</th>
        <th className="theader" >{header[2].toUpperCase()}</th>
        <th className="theader" >{header[3].toUpperCase()}</th>
        </>
        )
}

export default TableHead;