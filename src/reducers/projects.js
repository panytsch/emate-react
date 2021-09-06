import {
  ActionProjectClearEditData,
  ActionProjectCreatedSuccess,
  ActionProjectCreatingFailed, ActionProjectEditedSuccess, ActionProjectEditingFailed,
  ActionProjectLoadedForEditing,
  ActionProjectsLoaded, ActionProjectsSetActiveProject,
} from '../actions/projects';

const initialState = {
  projects: [],
  createProjectErrors: null,
  editProjectErrors: null,
  selectedToEditProject: null,
  activeProject: null,
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
      action.projects.forEach((project) => {
        if (project.active) {
          state.activeProject = project;
        }
      });
      if (!state.activeProject) {
        state.activeProject = action.projects[0] || null;
      }
      return {
        ...state,
        projects: action.projects,
        createProjectErrors: null,
      };
    case ActionProjectsSetActiveProject:
      state.activeProject = state.projects.find(({id}) => id === +action.projectId);
      return {...state};
    case ActionProjectLoadedForEditing:
      return {
        ...state,
        selectedToEditProject: action.project,
      };
    default:
      return {...state};
  }
};
