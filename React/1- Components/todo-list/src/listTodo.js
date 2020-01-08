import React from 'react';


export const ListTodo = (props)=>{
    let listOfItems;
    if(props.list.length > 0){
        listOfItems= props.list.map((item,index) =>  
            <li onClick={()=>props.remove(index) } key={index}>{item}</li>
        )
    }
    else {
        listOfItems =<p>Please add some tasks</p>
    }

    return (
        <ul>
            
           {listOfItems}
            
        </ul>
    )

}
  
export default ListTodo;
