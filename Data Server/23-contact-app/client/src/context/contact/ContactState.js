import React, { useReducer } from 'react';
import uuid from 'uuid';
import contactContext from './contactContext';
import contactReducer from './contactReducer';


import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CONTACT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACT,
    SET_ALERT,
    REMOVE_ALERT

} from "../types";

const ContactState = (props) => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'Romal Smith',
                email: 'romal@gmail.com',
                phone: '015-111-111',
                type: 'personal'
            },
            {
                id: 2,
                name: 'John Smith',
                email: 'john@gmail.com',
                phone: '015-222-222',
                type: 'business'
            },
            {
                id: 3,
                name: 'Ali',
                email: 'ali@gmail.com',
                phone: '015-333-333',
                type: 'personal'
            },
            {
                id: 4,
                name: 'Franco',
                email: 'franco@gmail.com',
                phone: '015-444-444',
                type: 'business'
            }
        ]
    };
    const [state, dispatch] = useReducer(contactReducer, initialState);
    
    
    // ADD_CONTACT
    const addContact = (contact) => {
        contact.id = uuid.v4();
        dispatch({ type: ADD_CONTACT, payload: contact })
    }

    // DELETE CONTACTS
    const deleteContact=(id)=>{
        dispatch({type:DELETE_CONTACT, payload:id});
    }


    // Set Current Contact,is getting the contact by id on click  when we want to Edit
    const setCurrent=(contact)=>{
        dispatch({type:SET_CONTACT, payload:contact});
    }


     // clear Current Contact
     const clearCurrent=(contact)=>{
        dispatch({type:CLEAR_CURRENT, payload:contact});
    }


    // Update 







    // Filter 





    return (
        <contactContext.Provider value={{
            contacts: state.contacts,
            current: state.current,
             addContact,deleteContact,setCurrent,clearCurrent,
            }}>

            {props.children}

        </contactContext.Provider>
    )


}

export default ContactState;