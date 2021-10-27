import { ActionTypes } from "../contants/action-types";

const initialState = {
  orders: [],
  ordersAfterFilter: [],
  value:''
};
export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_ORDERS:
      return { ...state, orders: action.payload };

    case ActionTypes.CREATE_ORDER:
      const newOrders = [...state.orders];
      newOrders.push(action.payload);
      return { ...state, orders: newOrders };

    case ActionTypes.DELETE_ORDER:
      return {
        ...state,
        orders: state.orders.filter((order) => order._id !== action.payload),
      };

    case ActionTypes.SAVE_VALUE:
      return {...state, value:action.payload}  

    case ActionTypes.SEARCH_ORDER:
      const AllOrders = [...state.orders];
      //const allFilterOrders = []
      if (action.payload.length > 0) {
        let filteredOrders = AllOrders.filter(
          (order) => order.Fullname.indexOf(action.payload, 0) > -1
        );
        
        return { ...state, ordersAfterFilter: filteredOrders };
      }
        return {...state, ordersAfterFilter:AllOrders}
      

    default:
      return state;
  }
};
