import React ,{useState} from 'react'; 


function App() {

  const [counter , setCounter] = useState(5)
  const [food,setFood] = useState(['banana']);
  const [color,setColor] = useState('lightgreen');
  document.body.style.background=color;
  return (
    <div className="App">
      <p>
        you clicked {counter} times
      </p>
      <button onClick= { () => setCounter(counter + 1)}>
        click me
      </button >
      <div>
        <button onClick= { () => setColor('red')}> red </button>
        <button onClick= { () => setColor('yellow')}> yellow</button>
        <button onClick= { () => setColor('lightblue')}> lightblue </button>
      </div>
     
    </div>
  );
}

export default App;

// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//        counter:5
//     }
//   }
  
//   render() {
//     return (
//       <div>
//          <p>
//           you clicked {this.state.counter} times
//           <button onClick = {()=> this.setState({ counter: this.state.counter +1})} >
//             click me
//           </button>
//         </p>
//       </div>
//     )
//   }
// }

