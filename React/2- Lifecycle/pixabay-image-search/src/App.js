import React, { Component } from 'react'
import Inputfield from './Components/Inputfield'
import Images from './Components/Images'

export default class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       root:'https://pixabay.com/api/',
       key: '13969636-76237031b60ec5ba89975d7b3',
       query: '',
       url: '',
       letSearch: false,
       loadedImages: null
    }
  }

  saveQuery = (e) => {
    this.setState({query:e.target.value,letSearch:false})
  }

  searchImages = () => {
    let words = this.state.query.split(' ');
    console.log(words)
    //https://pixabay.com/api/?key=139696&q=yellow+flowers
    let newURL = this.state.root+'?key='+this.state.key+'&per_page=200'+'&q=';
    console.log(newURL)
    words.forEach((word)=>{
      newURL += word+'+'
      console.log(newURL)
    });

    this.setState({url:newURL,letSearch:true,loadedImages:null})

  }

  loadImage = () => {
    console.log('test')
    let newImages = <Images url={this.state.url} />;
    this.setState({loadedImages:newImages,letSearch:false})
  }
  

  render() {
    if(this.state.letSearch){
      this.loadImage()
    }
    return (
      <div>
        <Inputfield change={this.saveQuery} click={this.searchImages}/>
        {this.state.loadedImages}
      </div>
    )
  }
}
