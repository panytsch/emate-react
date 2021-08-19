import {ActionProjectCreatedSuccess, ActionProjectCreatingFailed} from '../actions/projects';

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
    default:
      return {...state};
  }
};
