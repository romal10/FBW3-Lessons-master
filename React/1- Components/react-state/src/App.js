import React, { Component } from 'react'
import Person from './Person';
import './App.css';

export default class App extends Component {
  state = {
    persons : [
          { name : "Max" , city : "Essen", job : "Doctor"},
          { name : "Anna" , city : "Berlin" , job : "Journalist"},
          { name : "Romal" , city:"Libzig" , job: "Dentist"  }
    ],
    country : "Germany",
    currency: "Euro"

  }
   changeData = () => {
    //alert(this.state.persons[0].name);
    this.setState({
      persons : [
            { name : "John" , city : "New York", job : "PHP Developer"},
            { name : "Lara" , city : "Munic" , job : "Journalist"},
            { name : "Ali" , city:"Hamburg" , job: "Dentist"  }
      ],
      country: "USA"    
      
  
    })
    alert (this.state.country);

  }
  render() {
    return (
      <div className="App">
        <h1> this is React Class Component</h1>

        <Person name="Lars" city="Hannover" job="Web Designer" />
        <Person name={this.state.persons[0].name} 
        city={this.state.persons[0].city}  job={this.state.persons[0].job}  />

        <Person name={this.state.persons[1].name} 
        city={this.state.persons[1].city}  job={this.state.persons[1].job}  />

      <Person name={this.state.persons[2].name} 
       city={this.state.persons[2].city}  job={this.state.persons[2].job}  >
         <button onClick={this.changeData} > change data</button>
      </Person>
       

        
      </div>
    )
  }
}
