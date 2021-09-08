import axios from 'axios';
import {apiPath} from '../constants/api';
import * as routes from '../constants/routes';
import {dispatchDisableLoader, dispatchEnableLoader} from './loader';
import {history} from '../services/history';
import {removeEmptyFieldsInObject} from '../services/functions';

export const ActionTeamCreatedSuccess = '[teams] successfully created';
export const ActionTeamEditedSuccess = '[teams] successfully edited';
export const ActionTeamClearEditData = '[teams] clear edit data';
export const ActionTeamLoadedForEditing = '[teams] team loaded for editing';
export const ActionTeamCreatingFailed = '[teams] creating failed';
export const ActionTeamEditingFailed = '[teams] editing failed';
export const ActionTeamsLoaded = '[teams] load teams';

export const createTeam = (name, description, manager_id, employees_ids) => (dispatch, getState) => {
  dispatch(dispatchEnableLoader());
  let request = {name, description, manager_id, employees_ids};
  const state = getState();
  request.project_id = state.projects.activeProject.id;
  request = removeEmptyFieldsInObject(request);
  return axios
    .post(
      `${apiPath}/team/`,
      request,
    )
    .then(({data}) => {
      dispatch({
        type: ActionTeamCreatedSuccess,
        team: data,
      });
      history.push(routes.Teams);
    })
    .catch(({response}) => {
      dispatch({
        type: ActionTeamCreatingFailed,
        errors: response.data,
      });
    })
    .finally(() => {
      dispatch(dispatchDisableLoader());
    });
};

export const editTeam = (id, name, description, manager_id, employees_ids) => (dispatch, getState) => {
  dispatch(dispatchEnableLoader());
  let request = {id, name, description, manager_id, employees_ids};
  const state = getState();
  request.project_id = state.projects.activeProject.id;
  request = removeEmptyFieldsInObject(request);
  return axios
    .put(
      `${apiPath}/team/`,
      request,
    )
    .then(({data}) => {
      dispatch({
        type: ActionTeamEditedSuccess,
        team: data,
      });
      history.push(routes.Teams);
    })
    .catch(({response}) => {
      dispatch({
        type: ActionTeamEditingFailed,
        errors: response.data,
      });
    })
    .finally(() => {
      dispatch(dispatchDisableLoader());
    });
};

export const loadTeams = () => (dispatch) => {
  dispatch(dispatchEnableLoader());
  return axios
    .get(`${apiPath}/teams/`)
    .then(({data}) => {
      dispatch({
        type: ActionTeamsLoaded,
        teams: data,
      });
    })
    .finally(() => {
      dispatch(dispatchDisableLoader());
    });
};

export const loadTeamToEdit = (id) => (dispatch) => {
  dispatch(dispatchEnableLoader());
  return axios
    .get(`${apiPath}/team/${id}/`)
    .then(({data}) => {
      dispatch({
        type: ActionTeamLoadedForEditing,
        team: data,
      });
    })
    .finally(() => {
      dispatch(dispatchDisableLoader());
    });
};
