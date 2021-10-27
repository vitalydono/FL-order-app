import { ActionTypes } from "../contants/action-types";

const intialState = {
  users: [],
  logedUsers: []
};

export const userReducer = (state = intialState, action) => {
  switch (action.type) {
    case ActionTypes.CREATE_USER:
      const newUser = [...state.users];
      newUser.push(action.payload);
      return { ...state, users: newUser };
    
      case ActionTypes.LOGIN_USER:
        const loginUser = [ ...state.logedUsers ]
        loginUser.push(action.payload)
        return { ...state, logedUsers:loginUser }

    default:
      return state  
  }
};
