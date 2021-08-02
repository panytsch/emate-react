import axios from 'axios';
import {apiPath} from '../constants/api';

export const ActionSuccessLogin = '[auth] success login';
export const ActionSuccessRegister = '[auth] success register';
export const ActionFailedRegister = '[auth] failed register';
export const ActionFailedLogin = '[auth] failed register';

export const registerUser = (email, password1, password2) => (dispatch) => {
  return axios
    .post(`${apiPath}/registration/`, {email, password1, password2, username: email})
    .then(({data}) => {
      if (data.key) {
        dispatch({
          type: ActionSuccessRegister,
          token: data.key,
        });
      }
    });
}
