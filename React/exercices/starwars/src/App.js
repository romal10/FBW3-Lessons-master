import React, { Component } from 'react'
import './App.css';
export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      personInfo:[]
       
    }
  }
  componentDidMount(){

    let initialPersonInfos = [];
    fetch('https://swapi.co/api/people/')
    .then(res => res.json())
    .then(data => {
      initialPersonInfos = data.results;
      console.log('initialPersonInfos : ',initialPersonInfos)
      this.setState({
        personInfo:initialPersonInfos
      })
        
    } )
     
  }
  
  render() {
    let allData = this.state.personInfo.map((item)=> {
      return (
        <div className="card card-1">
          <h3> <b>Name : </b>  <span> {item.name} </span></h3>
          <h3> Height :<span>{item.height} </span> cm</h3>
          <h3> Weight :  <span>{item.mass} </span> kg</h3>          
        </div>
      )
    })
   
    return (
      <div  className="App">
       <div className="App-header"> Starwars data</div>
        {allData}
      </div>
    )
  }
}

