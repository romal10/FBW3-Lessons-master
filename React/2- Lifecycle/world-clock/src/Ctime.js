import React, { Component } from 'react'

export default class Ctime extends Component {

    constructor(props){
        super(props);
        this.state={
            timezone: '',
            time: 0
        }
    }

    static getDerivedStateFromProps(props,state){
        if(props.timezone.length > 0){
            return(state.timezone = props.timezone, state.time = props.time)
        }else{
            return null;
        }
    }

    render() {
        return (
            <div className="App">
                <h2><span>the time in  {this.state.timezone} is : </span>{this.state.time.toLocaleTimeString("de-DE",
                {timeZone: this.state.timezone})}</h2>
            </div>
        )
    }
}
