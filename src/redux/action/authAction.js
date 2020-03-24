import Axios from 'axios';

export const Login = (data) => {
    return{
        type: 'LOGIN',
        payload: data
    }
}

export const Logout = () => {
    return{
        type: 'LOGOUT'
    }
}

export const KeepLogin = () =>{
    return(dispatch)=>{
        const token = localStorage.getItem('token')
        console.log('Action',token)
        if(token){
            console.log('Action2',token)
            const header = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
            console.log(header)
            Axios.post('http://localhost:2020/users/KeepLogin',{}, header)
            .then((res)=>{
                console.log('Keep',res.data.token)
                localStorage.setItem('token',res.data.token)
                dispatch({
                    type: 'LOGIN',
                    payload: res.data
                })
            })
            .catch((err)=>{
                console.log(err)
                // dispatch({
                //     type:'LOGOUT'
                // })
            })
        }
    }
}