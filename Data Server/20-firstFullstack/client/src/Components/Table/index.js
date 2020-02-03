import React from 'react'

export default function Table (props) {
    const data = props.movieList;

    let headers_array = Object.keys(data[0]);
    let headers = headers_array.map((item,index)=>{
    return <th key={index} scope="col">{item}</th>
    })

    let rows = data.map(item=> {
        let temp_data = header_array.map((name, index)=>{
        return <td key={index}>{index[name]}</td>
        })
        return <tr keys= {item['_id']}>
            {temp_data}
            <td>
                <button id={item['_id']}
                 className="btn btn-danger">delete

                </button>
            </td>

        </tr>

    })

        return (
            <div className="container">
                <table>
                    
                </table>
                
            </div>
        )
    
}
