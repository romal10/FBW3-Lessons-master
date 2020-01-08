import React,{Component} from 'react';
import TableBody from './Components/TableBody'
import TableHead from './Components/TableHead'
import './App.css';

class App extends Component {

  state ={

    List: [
      {id: 1, name:"Andres", age: 29, email:"Andres@gmail.com"},
      {id: 2, name:"Ali", age: 25, email:"Ali@gmail.com"},
      {id: 3, name:"Juan", age: 21, email:"Juan@gmail.com"},
      {id: 4, name:"Michael", age: 32, email:"Michael@gmail.com"}
    ]
  }

  render() {
    return (
      <div className="App">
        <table className="tablestyle">
          <thead><tr><TableHead row={this.state.List[0]}/></tr></thead>
          <tbody><TableBody list={this.state.List}/></tbody>
        </table>
      </div>
    );
  }
}

export default App;
