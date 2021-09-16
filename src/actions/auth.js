import axios from 'axios';
import {apiPath} from '../constants/api';
import * as routes from '../constants/routes';
import {dispatchDisableLoader, dispatchEnableLoader} from './loader';
import {history} from '../services/history';
import {attachTokenToFutureRequests} from '../services/axios';

export const ActionSuccessLogin = '[auth] success login';
export const ActionSuccessRegister = '[auth] success register';
export const ActionFailedRegister = '[auth] failed register';
export const ActionFailedLogin = '[auth] failed register';
export const RememberMeAction = '[auth] remember me';
export const ActionNameWasFetched = '[auth] create name';
export const ActionCatchErrorsLogin = '[auth] catch errors';

export const registerUser = (email, password1, password2) => (dispatch) => {
  dispatch(dispatchEnableLoader());
  return axios
    .post(`${apiPath}/registration/`, {email, password1, password2, username: email})
    .then(({data}) => {
      if (data.key) {
        attachTokenToFutureRequests(data.key);
        dispatch({
          type: ActionSuccessRegister,
          token: data.key,
        });
        history.push(routes.MainLoggedInRoute);
      }
    })
    .finally(() => {
      dispatch(dispatchDisableLoader());
    });
};

export const loginUser = (email, password) => (dispatch) => {
  dispatch(dispatchEnableLoader());
  return axios
    .post(`${apiPath}/login/`, {email, password, username: email})
    .then(({data}) => {
      if (data.key) {
        attachTokenToFutureRequests(data.key);
        dispatch({
          type: ActionSuccessLogin,
          token: data.key,
        });
        history.push(routes.MainLoggedInRoute);
      }
    }).catch(function (error) {
      if (error?.response?.data) {

        dispatch({
          type: ActionCatchErrorsLogin,
          error: error.response.data,
        });
      }
    })
    .finally(() => {
      dispatch(dispatchDisableLoader());
    });
};

export const rememberMe = (wantsToRemember) => ({
  type: RememberMeAction,
  payload: !!wantsToRemember,
});


export const getUserInfo = () => (dispatch) => {
  return axios
    .get(`${apiPath}/user/token/`)
    .then(({data}) => {
      dispatch({
        type: ActionNameWasFetched,
        payload: data.email,
      });
    });
};
