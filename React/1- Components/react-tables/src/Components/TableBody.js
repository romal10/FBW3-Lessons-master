import React from 'react'
import '../App.css'

const TableBody = (props) => {

return( props.list.map((item) => {
        const {id, name, age, email} = item;
        return(
        <tr key ={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{age}</td>
            <td>{email}</td>
        </tr>
        )
    })
    )
}

export default TableBody;