import { combineReducers }  from 'redux';
const songsReducer = () => {

    return  [
        { title : 'Hotel California '  , duration: '6:30' },
        { title : 'Let it Go  '  , duration: '3:20' },
        { title : ' Summer Time'  , duration: '4:40' },
        { title : 'Last Christmas '  , duration: '5:30' },

    ];

}
const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type == 'SONG_SELECTED'){
        return action.payload

    }
    return selectedSong;
    
}

export default combineReducers ({
    songs : songsReducer , 
    selectedSong : selectedSongReducer

})