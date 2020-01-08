import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from '../actions'

let fetchedData =[];
class Home extends Component {
    handleRedirect=()=>{
        if(this.props.logedIn){
            return null
        }else{
            return <Redirect to='/'/>
        }
    }
    fectchPosts = () => {

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            console.log(response)
            return(response.json())
        })
        .then((data) => {
            console.log(data);
            fetchedData = data;
            
        })
        fetchedData.map((post)=>{
            return (
                <div> {post.title} </div>
            )

        })

    }


    render() {
        return (
            <div>
                {this.handleRedirect()}
                <h1>Welcome!!!!</h1>
                <h2>{this.props.user.username}</h2>

                <button onClick={this.props.LogoutUser}>Log Out</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.logedUser,
    logedIn: state.logedIn
})

const mapDispatchToProps = (dispatch) => ({
    LogoutUser: () => dispatch(logout())
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)