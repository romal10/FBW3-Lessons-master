import { loadState } from '../Storage';

let initialState = {
    usersArray: [
        {
            id: 1,
            username: 'Peter',
            age: 34,
            password:'peter1234'
        },
        {
            id:2,
            username: 'dcistudent',
            age: 27,
            password: 'dci'
        }
    ],
    logedIn: false,
    logedUser: {}
}
let defaultState = loadState();
if(defaultState ===null){
    console.log('Empty LocalStorage');
}
else {
    initialState = defaultState;
    console.log(initialState);
}


const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOGIN_ACTION':
            let success = false;
            let logedUser = {};
            state.usersArray.forEach((user) => {
                if(user.username === action.username 
                    && user.password === action.password){
                    success = true;
                    logedUser = user;
                }
            })
            return {
                ...state,
                logedIn: success,
                logedUser: logedUser
            }

        case 'REGISTER_ACTION':
            let newUserArray = [...state.usersArray];
            let newID = newUserArray.length + 1;
            let newUser ={
                id: newID,
                ...action.userinfo
                // ,username: action.userinfo.username,
                // password: action.userinfo.password,
                // age: action.userinfo.age
            }
            
            newUserArray.push(newUser)
            return({
                usersArray: newUserArray,
                logedIn: true,
                logedUser: newUser
            })

        case 'LOGOUT_ACTION':
            return({
                ...state,
                logedIn: false,
                logedUser: {}
            })
        
        default:
            return state

    }
}


export default usersReducer;