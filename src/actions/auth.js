import axios from 'axios';
import {apiPath} from '../constants/api';
import * as routes from '../constants/routes';
import {dispatchDisableLoader, dispatchEnableLoader} from './loader';
import {history} from '../services/history';

export const ActionSuccessLogin = '[auth] success login';
export const ActionSuccessRegister = '[auth] success register';
export const ActionFailedRegister = '[auth] failed register';
export const ActionFailedLogin = '[auth] failed register';

export const registerUser = (email, password1, password2) => (dispatch) => {
  dispatch(dispatchEnableLoader());
  return axios
    .post(`${apiPath}/registration/`, {email, password1, password2, username: email})
    .then(({data}) => {
      if (data.key) {
        dispatch({
          type: ActionSuccessRegister,
          token: data.key,
        });
        history.push(routes.Profile);
      }
    })
    .finally(() => {
      dispatch(dispatchDisableLoader());
    });
};
