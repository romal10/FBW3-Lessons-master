import React, { Component } from 'react'
import '../App.css'

export default class Images extends Component {
    constructor(props){
        super(props);
        this.state = {
            url: '',
            isLoading: false,
            error: false,
            fetchedData: []
        }
    }

    static getDerivedStateFromProps(props,state){
        if(state.url !== props.url){
            console.log()
            return(state.url=props.url)
        }else{
            return null
        }
    }


    componentDidMount(){
        this.setState({isLoading: true})
        const url = this.state.url
        console.log(url)
        fetch(url)
        .then((response) => {
            console.log(response)
            return(response.json())
        })
        .then((data) => {
            console.log(data)
            this.setState({fetchedData:data.hits, isLoading:false})
        })
        .catch(error => this.setState({error:error,isLoading:false}))
    }

    render() {
        console.log(this.state.fetchedData)
        let image_array = null;
        let loading = null;

        if(this.state.fetchedData.length > 0){
            image_array= this.state.fetchedData.map((item,index)=>{
            let style= {
                width:item.previewWidth,
                height: item.previewHeight,
                display: 'inline-block'
            }
            return(
                <div key={index} style={style}>
                    <img alt="" className="imgsearch" src={item.previewURL}/>
                </div>
            )
        })}
        if(this.state.isLoading){
            loading = <div>
                <h2> is loading.....</h2>
                <div className="load-div"></div>
            </div>
        }
        return (
            <div className="imageContainer">
                {loading}
                {image_array}
            </div>
        )
    }
}
