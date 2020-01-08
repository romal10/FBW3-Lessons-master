import {combineReducers , createStore} from 'redux';


// actions 
export const activateTarget = (target)=> ({
    type:'ACTIVATE_TARGET',
    target,
})
export const closeTarget = () => ({
    type:'CLOSE_TARGET',
})

// reducers

export const target = (state = {} ,action) => {
    if(action.type==="ACTIVATE_TARGET"){
        return action.target;
    }
    if(action.type==="CLOSE_TARGET"){
        return {};
    }
    return state

    // switch (action.type){
    //     case "ACTIVATE_TARGET":
    //         return action.target;
    //     case "CLOSE_TARGET" : 
    //         return {} 
    //         default: 
    //         return state   
    // }

}
export const reducers = combineReducers({
    target,

})


// store
export function configureStore( initialState = {} ){
  const store = createStore(reducers , initialState);
  return store;
}
export const store = configureStore()