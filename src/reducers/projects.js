import {ActionProjectCreatedSuccess} from '../actions/projects';

const initialState = {
  projects: [],
};

export const projects = (state = initialState, action) => {
  switch (action.type) {
    case ActionProjectCreatedSuccess:
      return {...state, projects: [...state.projects, action.project]};
    default:
      return {...state};
  }
};
