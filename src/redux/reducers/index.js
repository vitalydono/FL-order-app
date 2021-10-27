import {combineReducers} from 'redux'
import {orderReducer} from './orderReducer'
import { userReducer } from './userReducer'

const reducers = combineReducers({
    allOrders: orderReducer,
    allUsers: userReducer
})


export default reducers