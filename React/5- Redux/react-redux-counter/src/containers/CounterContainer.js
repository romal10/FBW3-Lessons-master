import React, { Component } from 'react';
import { connect  } from 'react-redux';
import Counter from '../components/Counter';
import CounterOutput from '../components/CounterOutput';


 export class CounterContainer extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <Counter label ="Increment" clicked={this.props.onIncrement} />
                <Counter label ="Decrement" clicked={this.props.onDecrement} />

                
            </div>
        )
    }
}
const mapStatetoProps = (state) =>{
   
    return {
        ctr:state.counter
        
    }

}
const mapDispatchtoprops = (dispatch)=>{
    return {
        onIncrement: () => { dispatch({ type: 'CTR_INCREMRNT'}) },
        onDecrement: () => { dispatch({ type: 'CTR_DECREMRNT'}) }

    }

}

export default connect(mapStatetoProps,mapDispatchtoprops)(CounterContainer)







