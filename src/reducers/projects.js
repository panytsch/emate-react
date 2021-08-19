import {ActionProjectCreatedSuccess, ActionProjectCreatingFailed, ActionProjectsLoaded} from '../actions/projects';

const initialState = {
  projects: [],
  createProjectErrors: null,
};

export const projects = (state = initialState, action) => {
  switch (action.type) {
    case ActionProjectCreatedSuccess:
      return {
        ...state,
        projects: [...state.projects, action.project],
        createProjectErrors: null,
      };
    case ActionProjectCreatingFailed:
      return {
        ...state,
        createProjectErrors: action.errors,
      };
    case ActionProjectsLoaded:
      return {
        ...state,
        projects: action.projects,
        createProjectErrors: null,
      };
    default:
      return {...state};
  }
};
