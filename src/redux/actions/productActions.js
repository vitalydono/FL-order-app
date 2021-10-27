import { ActionTypes } from "../contants/action-types"
import axios from 'axios'

export const getOrders = () => async (dispatch) => {
    try {        
        const res = await axios
        .get("http://localhost:4000/orders")
        const orders = res.data

        dispatch({
            type: ActionTypes.GET_ORDERS,
            payload: orders
        })
    } catch (error) {

    }
}

export const createOrder = (orderData) => async (dispatch) => {
    try {
        const res = await axios
        .post("http://localhost:4000/orders", orderData)
        const order = res.data

        console.log(order,'fvffdvghtegwvbter')

        dispatch({
            type: ActionTypes.CREATE_ORDER,
            payload: order
        })
    } catch (error) {
        console.log(error);
    }
}

export const deleteOrder = (order) => async (dispatch) => {
    try {
        const res = await axios
    .delete(`http://localhost:4000/orders/${order.id}`)
        const deletedOrder = order.id

    dispatch({
        type: ActionTypes.DELETE_ORDER,
        payload: deletedOrder
    })
    } catch (error) {
        console.log(error);
    }

}

export const saveValue = (value) => async (dispatch) => {
    dispatch({
        type:ActionTypes.SAVE_VALUE,
        payload:value
    })
}

export const searchOrder = (text) => async (dispatch) => {
   try {
    await getOrders()
    const inputValue = text
    dispatch({
        type:ActionTypes.SEARCH_ORDER,
        payload:inputValue.toLowerCase()
    })  
   } catch (error) {
       
   } 
}
