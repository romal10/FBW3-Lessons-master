import React, { Component } from 'react';
import InputTodo from './inputTodo';
import ListTodo ,{removeTodoList} from './listTodo';
import './App.scss';

//  let todoItems = [];
//  todoItems.push({ id : 1 , task: "Learn React", done:false });
//  todoItems.push({ id : 2 , task: "dinner with friends", done:false });
//  todoItems.push({ id : 3 , task: "Go to gym", done:false });


class TodoList extends Component {
  state = {
    todoValue: "",
    todoList: []
  }
  changeToDoValue(e) {
    this.setState({
      todoValue: e.target.value
    })

  }
  addToList() {
    let list = this.state.todoList;

    list.push(this.state.todoValue);


    this.setState({
      todoList: list, todoValue: ''
    })
    console.log(this.state.todoList);

  }
  removeTodoList=(item) =>{
   // alert("you want to delete ?");
    let myList = this.state.todoList;
    myList.splice(item,1);

    this.setState({
      todoList : myList
    })
    //console.log(myList)
        
}
 

  render() {
    return (
      <div className='App'>

        {/* the input component */}
        <InputTodo todoValue={this.state.todoValue} changed={(e) => this.changeToDoValue(e)} />
        <button onClick={() => this.addToList()} > add to the list</button>

        {/* the List component */}
        <ListTodo list={this.state.todoList} 
           remove={(item)=>this.removeTodoList(item)}/>
      </div>
    )

  }

}


export default TodoList;
