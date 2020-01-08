export const checklogin = (username,password) =>{
    return({
        type: 'LOGIN_ACTION',
        username,
        password
    })
}

export const saveRegistration = (userinfo) => {
    return({
        type: 'REGISTER_ACTION',
        userinfo
    })
}

export const logout = () => {
    return({
        type: 'LOGOUT_ACTION'
    })
}