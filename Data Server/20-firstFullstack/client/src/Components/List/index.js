import React, { Component } from 'react'
import apis from '../../api'
import Table from '../Table'
export default class List extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             movies: [],
             isLoading: false
        }
    }
    
    componentDidMount = async () => {
        this.setState({isLoading: true})
        await apis.getMovieList().then(response =>{
            console.log(response.data)
            this.setState({
                movies: response.data,
                isLoading:false
            })
        })
    }
    handleLoadData = async () => {
        await apis.getMovieList().then(response =>{
            console.log(response.data)
            this.setState({
                movies: response.data,
                isLoading:false
            })
        })
    }
    handleDelete = async (e) =>{
        let id = e.target.id
        await apis.deleteMovie(id).then(response=>{
            this.handleLoadData()
        })
    }
    
    render() {
        const loadMessage = <div className="container">
                                <h2>The data is loading</h2>
                            </div>
        let output = ''
        if(this.state.movies.length > 0){
            output = <Table 
                        delete={this.handleDelete} 
                        movieList = {this.state.movies} 
                    />
        }else{
            output = <div className="container">
                        <h2>There are no movie reviews</h2>
                    </div>
        }
        return (
            <div>
                {this.state.isLoading ? loadMessage : output}
            </div>
        )
    }
}