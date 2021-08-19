import axios from 'axios';
import {apiPath} from '../constants/api';
import * as routes from '../constants/routes';
import {dispatchDisableLoader, dispatchEnableLoader} from './loader';
import {history} from '../services/history';

export const ActionProjectCreatedSuccess = '[projects] successfully created';
export const ActionProjectCreatingFailed = '[projects] creating failed';
export const ActionProjectsLoaded = '[projects] load projects';

export const createProject = (name, description, customerInfo, status, managerId, teamId, expectedBudget, dueDate) => (dispatch) => {
  dispatch(dispatchEnableLoader());
  return axios
    .post(
      `${apiPath}/project/`,
      {
        name,
        description,
        customer_info: customerInfo,
        status,
        manager_id: managerId,
        team_id: teamId,
        expected_budget: expectedBudget,
        due_date: dueDate,
      })
    .then(({data}) => {
      dispatch({
        type: ActionProjectCreatedSuccess,
        project: data,
      });
      history.push(routes.Projects);
    })
    .catch(({response}) => {
      dispatch({
        type: ActionProjectCreatingFailed,
        errors: response.data,
      });
    })
    .finally(() => {
      dispatch(dispatchDisableLoader());
    });
};

export const loadProjects = () => (dispatch) => {
  dispatch(dispatchEnableLoader());
  return axios
    .get(`${apiPath}/projects/`)
    .then(({data}) => {
      dispatch({
        type: ActionProjectsLoaded,
        projects: data,
      });
    })
    .finally(() => {
      dispatch(dispatchDisableLoader());
    });
}
