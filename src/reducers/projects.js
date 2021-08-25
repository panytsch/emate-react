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
        projects: [...state.projects, action.project],
        createProjectErrors: null,
      };
    case ActionProjectEditedSuccess:
      return {
        ...state,
        projects: [...state.projects, action.project],
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
