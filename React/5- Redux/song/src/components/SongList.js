import React, { Component } from 'react'
import { connect } from 'react-redux';
import {selectSong} from '../actions'
class SongList extends Component {
    renderList() {
        return this.props.songs.map((song)=> {
            return (
                <div className="item" key={song.title} >
                    <div className="right floated content">
                        <button  className="ui button orange"
                        onClick= {()=> this.props.selectSong(song)}> select</button>
                       <div>
                       {song.title}
                       </div>
                    </div>

                </div>

            )

        })
    }
    render() {
       // console.log('this.props : ',this.props)
        return (
            <div className="ui divided list">
                 {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('state value : ',state);
    return {
        songs:state.songs
    }

}
export default connect (mapStateToProps, {selectSong})(SongList)
