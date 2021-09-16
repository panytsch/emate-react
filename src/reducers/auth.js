import {
  ActionFailedLogin,
  ActionFailedRegister,
  ActionSuccessLogin,
  ActionSuccessRegister,
  RememberMeAction,
  ActionNameWasFetched,
  ActionCatchErrorsLogin,
} from '../actions/auth';
import {attachTokenToFutureRequests} from '../services/axios';

const rememberMeKey = 'rememberMe';
const tokenKey = 'token';

const getInitialState = () => {
  const initialState = {
    token: window.localStorage.getItem(tokenKey),
    loginErrors: null,
    rememberMe: window.localStorage.getItem(rememberMeKey) === 'true',
    userName: 'Name lastName',
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
      state.rememberMe && window.localStorage.setItem(tokenKey, action.token);
      return {
        ...state,
        token: action.token,
        loginErrors: {},
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
        rememberMe: !!action.payload,
      };
    case ActionNameWasFetched:
      return {
        ...state,
        userName: action.payload,
      };
    case ActionCatchErrorsLogin:
      return {
        ...state,
        loginErrors: action.error,
      };
    default:
      return {...state};
  }
};
