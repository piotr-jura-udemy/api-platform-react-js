import {USER_LOGIN_SUCCESS} from "../actions/constants";

export default (state = {
  token: null,
  userId: null
}, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      console.log('From reducer: ' + action.token);
      return {
        ...state,
        token: action.token,
        userId: action.userId
      };
    default:
      return state;
  }
}
