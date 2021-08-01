import {ActionFailedLogin, ActionFailedRegister, ActionSuccessLogin, ActionSuccessRegister} from '../actions/auth';

const initialState = {
  token: null,
  error: null,
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case ActionSuccessLogin:
    case ActionSuccessRegister:
      return {
        ...state,
        token: action.token,
      };
    case ActionFailedLogin:
    case ActionFailedRegister:
      return {
        ...state,
        error: action.error,
      };
    default:
      return {...state};
  }
}
