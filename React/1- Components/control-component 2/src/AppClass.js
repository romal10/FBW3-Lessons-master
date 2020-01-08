import React, { Component } from 'react';
import Input from './Input';
import './App.css';


export default class AppClass extends Component {
    constructor(props){
        super(props);

        this.state ={
            name: "",
            email:"",
            valid:false
        }
    }
    NameHandelInputChange = (e)=>{
        this.setState({
            name: e.target.value,

        })
    }

    EmailHandelInputChange = (e)=>{
        this.setState({
            email: e.target.value,

        })
    }
    handelSubmit = (e)=>{
        e.preventDefault();
        if(this.state.name ==='' || this.state.email ==='' ){
            alert('please fill the form');
            return false;        
         }
         else {
             alert ('thanks a lot ');
             this.setState({
                 valid:true
             })
             return true;
         }
    }
    isValid = ()=>{
        if(this.state.todo ===''){
            return false;
        }
        return true;
    }
    render() {
        if(this.state.valid==true){
            return (
                <div className="App">
                    <h2> Thanks a lot for your Message </h2>
                </div>
            )
        }
        else {
        return (
            <div className="App">
              <h2>  Controlled Component with react</h2>
              <form onSubmit={this.handelSubmit}>

                <div className="form-group">
                    <label> the Name </label>
                    <Input onChange={this.NameHandelInputChange} id="name" 
                    
                    placeholder="write some text"  type="text" value = {this.state.name} />
                </div>
                <div className="form-group">
                    <label> the Email </label>
                    <Input onChange={this.EmailHandelInputChange} id="email" 
                    
                    placeholder="write your email"  type="text" value = {this.state.email} />
                </div>

                {/* <Input type="submit" value="Submit the form"  /> */}
               <div className="form-group">
               <button className="btn btn-success" disabled={!this.isValid()} type="submit" >Submit </button>
               </div>
                
              </form>  
            </div>
        )
     }
    }
}