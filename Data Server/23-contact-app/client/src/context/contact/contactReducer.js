import { 
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CONTACT,
    CLEAR_CURRENT ,
    FILTER_CONTACT,
    SET_ALERT,
    REMOVE_ALERT

 } from "../types";

 export default (state , action)=>{

    switch(action.type){

        case  ADD_CONTACT : 
         return {
             ...state,
             contacts : [...state.contacts , action.payload ]
        }

        case DELETE_CONTACT:
            return{
                ...state,
                contacts:state.contacts.filter(item => item.id !== action.payload)
            }
        case SET_CONTACT:
            return{
                ...state,
                current:action.payload
            }
        case CLEAR_CURRENT:
            return{
                ...state,
                current:null
            }
        default: 
        return state;
    }


 }