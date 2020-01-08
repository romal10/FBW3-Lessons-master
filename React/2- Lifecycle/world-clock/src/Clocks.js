import React, { Component } from 'react'
import Ctime from './Ctime'
export default class Clocks extends Component {

    constructor(props){
        super(props);
        this.state = {
            countries:['Europe/Berlin','America/Bogota','Asia/Tokyo','Africa/Cairo','Australia/Adelaide'],
            time: new Date()
        }
    }

    componentDidMount(){
        this.timer= setInterval(
            () => this.tick(), 1000
        );
    }

    tick = () => {
        this.setState({time:new Date()})
    }

    render() {
        let countriesList=this.state.countries.map((item)=>{
             return <Ctime time={this.state.time}  timezone={item} />
        })
        return (
            <div>
              {countriesList}
              
            </div>
        )
    }
}
