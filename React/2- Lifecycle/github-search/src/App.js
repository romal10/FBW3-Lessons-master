import React, { Component } from 'react'
import './App.css';
const API = 'https://api.github.com/users';


export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       username: 'twitter',
       name:'',
       avatar:'',
       location:'',
       repos:'',
       followers:'',
       following:'',
       homeUrl:'',
       notFound:''
    }
  }
  fetchProfile = (username)=>{
    let url = API+'/'+username;
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      this.setState({
        username:data.login,
        name:data.name,
        avatar:data.avatar_url,
        location:data.location,
        repos:data.public_repos,
        followers:data.followers,
        following:data.following,
        homeUrl:data.html_url,
        notFound:data.message

      })
    })
    .catch((error) => console.log('Oops! there is A problem'))
  }
  componentDidMount(){
    this.fetchProfile(this.state.username);
  }
  render() {
    return (
      <div>
        <section  id="card">
          <SearchProfile fetchProfile={this.fetchProfile.bind(this)} />
          <Profile data={this.state} />
         </section>
      </div>
    )
  }
}


 class SearchProfile extends Component {
  render() {
    return (
      <div className="search--box">
        <form onSubmit={this.handleForm.bind(this)} >
          <label>
            <input type="search" ref={(ref) => this.search=ref }  
            placeholder="Please Type a Username + Enter or type romal10"
            />
          </label>
        </form>
        
      </div>
    )
  }
  handleForm = (e)=>{
    e.preventDefault();
    let username = this.search.value;
    this.props.fetchProfile(username);
    this.search.value='';
  }
}
 

export   class Profile extends Component {
  render() {
    let data = this.props.data;
    let followers =`${data.homeUrl}/followers`;
    let repositories = `${data.homeUrl}?tab=repositories`;
    let following =`${data.homeUrl}/following`;
    if(data.notFound === 'Not Found'){
    return (
      <div className="notfound">
        <h2>Oops !!</h2>
        <p>The component that you are looking for is not found. try Again</p>
      </div>   
    )
  }else console.log(data)
    return (
      <section className="github--profile">
        <div className="github--profile__info">
          <a href={data.homeUrl} target="_blank" title={data.name } >
            <img src={data.avatar} />
          </a>
          <h2> 
            <a href={data.homeUrl} target="_blank">{data.name || data.username}</a>
          </h2>
          <h3>{data.location  || 'I Live In My Mind'}</h3>         
        </div>
        <div className="github--profile__state">
          <ul>
            <li>
              <a href={followers} target="_blank" title="Number of Followes" ><i>{data.followers}</i><span>Followers</span></a>
            </li>
            <li>
              <a href={repositories} target="_blank" title="Number of repositories" ><i>{data.repos}</i><span>repositories</span></a>
            </li>
            <li>
              <a href={following} target="_blank" title="Number of following" ><i>{data.following}</i><span>following</span></a>
            </li>
          </ul>
        </div>
        
      </section>
    )
  }
}




export {SearchProfile} 
