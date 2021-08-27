import axios from 'axios';
import {apiPath} from '../constants/api';
import * as routes from '../constants/routes';
import {dispatchDisableLoader, dispatchEnableLoader} from './loader';
import {history} from '../services/history';
import {removeEmptyFieldsInObject} from '../services/functions';

export const ActionEmployeeCreatedSuccess = '[employees] successfully created';
export const ActionEmployeeEditedSuccess = '[employees] successfully edited';
export const ActionEmployeeClearEditData = '[employees] clear edit data';
export const ActionEmployeeLoadedForEditing = '[employees] employee loaded for editing';
export const ActionEmployeeCreatingFailed = '[employees] creating failed';
export const ActionEmployeeEditingFailed = '[employees] editing failed';
export const ActionEmployeesLoaded = '[employees] load projects';

export const createEmployee = (first_name, last_name, email, position, price_per_hour_internal, price_per_hour_external, seniority, team_id) => (dispatch) => {
  dispatch(dispatchEnableLoader());
  let request = {first_name, last_name, email, position, price_per_hour_internal, price_per_hour_external, seniority, team_id};
  request = removeEmptyFieldsInObject(request);
  return axios
    .post(
      `${apiPath}/employee/`,
      request,
    )
    .then(({data}) => {
      dispatch({
        type: ActionEmployeeCreatedSuccess,
        employee: data,
      });
      history.push(routes.Employees);
    })
    .catch(({response}) => {
      dispatch({
        type: ActionEmployeeCreatingFailed,
        errors: response.data,
      });
    })
    .finally(() => {
      dispatch(dispatchDisableLoader());
    });
};

export const editEmployee = (id, first_name, last_name, email, position, price_per_hour_internal, price_per_hour_external, seniority, team_id) => (dispatch) => {
  dispatch(dispatchEnableLoader());
  return axios
    .put(
      `${apiPath}/employee/`,
      {id, first_name, last_name, email, position, price_per_hour_internal, price_per_hour_external, seniority, team_id},
    )
    .then(({data}) => {
      dispatch({
        type: ActionEmployeeEditedSuccess,
        employee: data,
      });
      history.push(routes.Employees);
    })
    .catch(({response}) => {
      dispatch({
        type: ActionEmployeeEditingFailed,
        errors: response.data,
      });
    })
    .finally(() => {
      dispatch(dispatchDisableLoader());
    });
};

export const loadEmployees = () => (dispatch) => {
  dispatch(dispatchEnableLoader());
  return axios
    .get(`${apiPath}/employees/`)
    .then(({data}) => {
      dispatch({
        type: ActionEmployeesLoaded,
        employees: data,
      });
    })
    .finally(() => {
      dispatch(dispatchDisableLoader());
    });
};

export const loadEmployeeToEdit = (id) => (dispatch) => {
  dispatch(dispatchEnableLoader());
  return axios
    .get(`${apiPath}/employee/${id}/`)
    .then(({data}) => {
      dispatch({
        type: ActionEmployeeLoadedForEditing,
        employee: data,
      });
    })
    .finally(() => {
      dispatch(dispatchDisableLoader());
    });
};
