import React , {useState } from 'react'

export default function Input() {
    const [value , setValue] = useState('');
    return (
        <div>
            <form >
                <label > please write your name</label>
                <input onChange = {(e) => setValue(e.target.value)}  type="text" /> 
            </form>
            <p> your name is  :  {value}</p>
        </div>
    )
}
