const INITIAL_STATE = {
    users: '',
    email: '',
    role: '',
    id:0,
    password:''
}

export const authReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'LOGIN':
            console.log(action.payload)
            return {
                // ...state,
                users: action.payload.username,
                email: action.payload.email,
                role: action.payload.role,
                password: action.payload.password,
                id: action.payload.id
            }
        case 'LOGOUT':
            return INITIAL_STATE
        default:
            return state
    }
}