import React, { Component } from 'react'
import Inputfield from './Components/Inputfield';
import './App.css'
import Images from './Components/Images';

export default class ImageApp extends Component {

    constructor(props){
        super(props);
        this.state = {
            root: 'https://pixabay.com/api/',
            key: '13969636-76237031b60ec5ba89975d7b3',
            query: '',
            url: '',
            letSearch: false,
            loadedImages: null
        }
    }

    searchImages = () =>{
        const newURL = this.state.root+'?key='+this.state.key+'&q='+this.state.query+'+';
        console.log(newURL)
        this.setState({url:newURL,letSearch:true,loadedImages:null})

    }

    saveQuery = (e) => {
        this.setState({query:e.target.value,letSearch:false})
    }

    loadImages = (url) =>{
        let newImages = <Images url={url}/>
        this.setState({loadedImages:newImages,letSearch:false})
        console.log(this.state.loadedImages)
    }

    render() {
        if(this.state.letSearch){
            this.loadImages(this.state.url);
        }

        return (
            <div className="App">
                <Inputfield change={this.saveQuery} click={this.searchImages}/>
                {this.state.loadedImages}
            </div>
        )
    }
}
