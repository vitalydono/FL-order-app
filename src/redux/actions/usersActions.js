import { ActionTypes } from "../contants/action-types"
import axios from 'axios'


export const registerUser = (userData) => async (dispatch) => {

    try {
        const res = await axios
        .post("http://localhost:4000/users/register", userData)
        const user = res.data
        console.log(user,'fvffdvghtegwvbter')

        dispatch({
            type: ActionTypes.REGISTER_USER,
            payload: user
        })

    } catch (error) {
        console.log(error);
    }
}


export const loginUser = (userData) => async (dispatch) => {

    try {
        
        const res = await axios
        .post("http://localhost:4000/users/login", userData)
        const user = res.data
        console.log(user,'fvffdvghtegwvbter')
        localStorage.setItem('userProfile', JSON.stringify(user))

        dispatch({
            type: ActionTypes.LOGIN_USER,
            payload: user
        })
        
    } catch (error) {
        console.log(error);
    }
}


