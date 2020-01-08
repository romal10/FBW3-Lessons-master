import React, { Component } from 'react'

export default class TitleHeader extends Component {
    // mounting : 1 
   constructor(props) {
       super(props)
   
       this.state = {
            title :''
       }
    
   }
   static getDerivedStateFromProps(props, state){
       console.log('sync props to state');
       console.log('new props', props.newTitle);
       console.log('old state ', state.title);
       if(state.title !== props.newTitle){
           return {
               title : props.newTitle
           }           
       }
       else{ return null

        }


   }
   componentDidMount(){
       console.log('component did mount ', this.state.title)
       let header = document.querySelector('h1');
       header.style.background="lightgreen";
   }
   // update of the component 

   shouldComponentUpdate(){
       
       console.log('updating ... shouldComponentUpdate');
       return true;
   }
   componentDidUpdate(){
       console.log("component did update " , this.state.title);
       let header = document.querySelector('h1');
       header.style.background='pink';
   }
   componentWillUnmount(){
       alert('Component will unmount Good By !!!!');
   }

    render() {
        return (
            <div className="App">
                <h1> {this.state.title} </h1>                
            </div>
        )
    }
}
