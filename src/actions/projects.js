import axios from 'axios';
import {apiPath} from '../constants/api';
import * as routes from '../constants/routes';
import {dispatchDisableLoader, dispatchEnableLoader} from './loader';
import {history} from '../services/history';

export const ActionProjectCreatedSuccess = '[projects] successfully created';
export const ActionProjectEditedSuccess = '[projects] successfully edited';
export const ActionProjectClearEditData = '[projects] clear edit data';
export const ActionProjectLoadedForEditing = '[projects] project loaded for editing';
export const ActionProjectCreatingFailed = '[projects] creating failed';
export const ActionProjectEditingFailed = '[projects] editing failed';
export const ActionProjectsLoaded = '[projects] load projects';
export const ActionProjectsSetActiveProject = '[projects] set active ';

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
                manager_id: managerId || null,
                team_id: teamId || null,
                expected_budget: expectedBudget,
                due_date: dueDate || null,
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

export const editProject = (id, name, description, customerInfo, status, managerId, teamId, expectedBudget, dueDate) => (dispatch) => {
    dispatch(dispatchEnableLoader());
    return axios
        .put(
            `${apiPath}/project/`,
            {
                project_id: id,
                name,
                description,
                customer_info: customerInfo,
                status,
                manager_id: managerId || null,
                team_id: teamId || null,
                expected_budget: expectedBudget,
                due_date: dueDate || null,
            })
        .then(({data}) => {
            dispatch({
                type: ActionProjectEditedSuccess,
                project: data,
            });
            history.push(routes.Projects);
        })
        .catch(({response}) => {
            dispatch({
                type: ActionProjectEditingFailed,
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

export const loadProjectToEdit = (id) => (dispatch) => {
    dispatch(dispatchEnableLoader());
    return axios
        .get(`${apiPath}/project/${id}/`)
        .then(({data}) => {
            dispatch({
                type: ActionProjectLoadedForEditing,
                project: data,
            });
        })
        .finally(() => {
            dispatch(dispatchDisableLoader());
        });
}

export const setActiveProject = (id) => ({
  type: ActionProjectsSetActiveProject,
  projectId: id,
})
