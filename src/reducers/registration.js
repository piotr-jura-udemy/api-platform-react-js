import {USER_CONFIRMATION_SUCCESS, USER_REGISTER_SUCCESS} from "../actions/constants";

export default (state = {
  registrationSuccess: false,
  confirmationSuccess: false
}, action) => {
  switch(action.type) {
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        registrationSuccess: true
      };
    case USER_CONFIRMATION_SUCCESS:
      return {
        ...state,
        confirmationSuccess: true
      };
    default:
      return state;
  }
}
