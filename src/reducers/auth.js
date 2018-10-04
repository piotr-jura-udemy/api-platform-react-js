import {USER_LOGIN_SUCCESS, USER_PROFILE_RECEIVED, USER_SET_ID} from "../actions/constants";

export default (state = {
  token: null,
  userId: null,
  isAuthenticated: false,
  userData: null
}, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
        isAuthenticated: true
      };
    case USER_SET_ID:
      return {
        ...state,
        userId: action.userId,
        isAuthenticated: true
      };
    case USER_PROFILE_RECEIVED:
      console.log(state.userId);
      console.log(action.userId);
      console.log(state.userData);
      return {
        ...state,
        userData: (state.userId === action.userId && state.userData === null)
          ? action.userData : state.userData,
        isAuthenticated: (state.userId === action.userId && state.userData === null)
      };
    default:
      return state;
  }
}
