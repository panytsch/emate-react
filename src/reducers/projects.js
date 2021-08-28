import {
  ActionProjectClearEditData,
  ActionProjectCreatedSuccess,
  ActionProjectCreatingFailed, ActionProjectEditedSuccess, ActionProjectEditingFailed,
  ActionProjectLoadedForEditing,
  ActionProjectsLoaded,
} from '../actions/projects';

const initialState = {
  projects: [],
  createProjectErrors: null,
  editProjectErrors: null,
  selectedToEditProject: null,
};

export const projects = (state = initialState, action) => {
  switch (action.type) {
    case ActionProjectCreatedSuccess:
      return {
        ...state,
        createProjectErrors: null,
      };
    case ActionProjectEditedSuccess:
      return {
        ...state,
        editProjectErrors: null,
      };
    case ActionProjectClearEditData:
      return {
        ...state,
        editProjectErrors: null,
        selectedToEditProject: null,
      };
    case ActionProjectCreatingFailed:
      return {
        ...state,
        createProjectErrors: action.errors,
      };
    case ActionProjectEditingFailed:
      for (const errorsKey in action.errors) {
        action.errors[errorsKey] = action.errors[errorsKey][0];
      }
      return {
        ...state,
        editProjectErrors: action.errors,
      };
    case ActionProjectsLoaded:
      return {
        ...state,
        projects: action.projects,
        createProjectErrors: null,
      };
    case ActionProjectLoadedForEditing:
      return {
        ...state,
        selectedToEditProject: action.project,
      };
    default:
      return {...state};
  }
};
