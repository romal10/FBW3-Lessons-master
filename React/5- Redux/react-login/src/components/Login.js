import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {checklogin} from '../actions'

class Login extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             logininfo:{
                 username: '',
                 password: ''
             }
        }
    }
    
    handleUsername = (e) => {
        this.setState({
            logininfo:{
                ...this.state.logininfo,
                username: e.target.value
            }
        })
    }

    handlePassword = (e) => {
        this.setState({
            logininfo:{
                ...this.state.logininfo,
                password: e.target.value
            }
        })
    }

    handleForm = (e) => {
        e.preventDefault()
        this.props.LoginUser(this.state.logininfo.username,this.state.logininfo.password)
    }

    handleRedirect=()=>{
        if(this.props.redirect){
            return <Redirect to='/Home'/>
        }else{
            return null
        }
    }

    render() {
        return (
            <div>
                {this.handleRedirect()}
                <h1>Fill the data and login!!</h1>
                <form onSubmit={this.handleForm}>
                    <label htmlFor='username'>Username:</label>
                    <input name='username' type='text'
                    placeholder='write your username'
                    value={this.state.logininfo.username}
                    onChange={this.handleUsername}/>

                    <label htmlFor='password'>Password:</label>
                    <input name='password' type='password'
                    placeholder='write your password'
                    value={this.state.logininfo.password}
                    onChange={this.handlePassword}/>

                    <input type='submit' value='submit'/>
                </form>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    redirect: state.logedIn
})

const mapDispatchToProps = (dispatch) => ({
    LoginUser: (username,password) => dispatch(checklogin(username,password))
})

export default connect(mapStateToProps,mapDispatchToProps)(Login)
