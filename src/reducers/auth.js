import {
  ActionFailedLogin,
  ActionFailedRegister,
  ActionSuccessLogin,
  ActionSuccessRegister,
  RememberMeAction,
} from '../actions/auth';
import {attachTokenToFutureRequests} from '../services/axios';

const rememberMeKey = 'rememberMe';
const tokenKey = 'token';

const getInitialState = () => {
  const initialState = {
    token: window.localStorage.getItem(tokenKey),
    error: null,
    rememberMe: !!window.localStorage.getItem(rememberMeKey),
  };
  if (initialState.token) {
    attachTokenToFutureRequests(initialState.token);
  }
  return initialState;
};

export const auth = (state = getInitialState(), action) => {
  switch (action.type) {
    case ActionSuccessLogin:
    case ActionSuccessRegister:
      window.localStorage.setItem(tokenKey, action.token);
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
    case RememberMeAction:
      window.localStorage.setItem(rememberMeKey, action.payload);
      return {
        ...state,
        rememberMe: action.payload,
      };
    default:
      return {...state};
  }
};
