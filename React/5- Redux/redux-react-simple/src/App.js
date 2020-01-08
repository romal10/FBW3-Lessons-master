import React, { Component } from 'react'
import { connect } from 'react-redux';
import { activateTarget , closeTarget } from './redux'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h2> {this.props.target.title || "Hello FBW3 !!! " } </h2>
        {this.props.target.title ? (
          <button onClick={this.props.closeTarget} > exit Target
           </button> 
         ) : (
          <button onClick={() =>
            this.props.activateTarget({ title: "I am your Target dude"})} > activate Target
           </button> 
          ) }
        
      </div>
    )
  }
}

// AppContainer
const mapStateToProps = (state) => ({
  target : state.target,
})

const mapDispatchToProps = {
  activateTarget,
  closeTarget,
}
export  const AppContainer = connect (
  mapStateToProps,
  mapDispatchToProps

)(App)
