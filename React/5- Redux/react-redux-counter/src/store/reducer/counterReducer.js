const initialState = {
    counter:0
}
const counterReducer = (state = initialState ,action) => {
    switch(action.type){
        case 'CTR_INCREMRNT':               
            return {
                ...state,
                counter:state.counter +1
            }
            case 'CTR_DECREMRNT':
                    return {
                        ...state,
                        counter:state.counter -1
                    }
             default : 
             return state       

    }   

}

export default counterReducer