import {
  ActionTeamClearEditData,
  ActionTeamCreatedSuccess,
  ActionTeamCreatingFailed, ActionTeamDeleted,
  ActionTeamEditedSuccess,
  ActionTeamEditingFailed,
  ActionTeamLoadedForEditing,
  ActionTeamsLoaded,
} from '../actions/teams';


const initialState = {
  teams: [],
  createTeamErrors: null,
  editTeamErrors: null,
  selectedToEditTeam: null,
};

export const teams = (state = initialState, action) => {
  switch (action.type) {
    case ActionTeamCreatedSuccess:
      return {
        ...state,
        createTeamErrors: null,
      };
    case ActionTeamEditedSuccess:
      return {
        ...state,
        editTeamErrors: null,
      };
    case ActionTeamClearEditData:
      return {
        ...state,
        editTeamErrors: null,
        selectedToEditTeam: null,
      };
    case ActionTeamCreatingFailed:
      for (const errorsKey in action.errors) {
        action.errors[errorsKey] = action.errors[errorsKey][0];
      }
      return {
        ...state,
        createTeamErrors: action.errors,
      };
    case ActionTeamEditingFailed:
      for (const errorsKey in action.errors) {
        action.errors[errorsKey] = action.errors[errorsKey][0];
      }
      return {
        ...state,
        editTeamErrors: action.errors,
      };
    case ActionTeamsLoaded:
      return {
        ...state,
        teams: action.teams,
        createTeamErrors: null,
      };
    case ActionTeamLoadedForEditing:
      return {
        ...state,
        selectedToEditTeam: action.team,
      };
    case ActionTeamDeleted:
      state.teams = state.teams.filter(({id}) => id !== action.id);
      return {...state};
    default:
      return {...state};
  }
};
