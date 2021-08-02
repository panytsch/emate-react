import {DisableLoaderAction, EnableLoaderAction} from '../actions/loader';

const initialState = {
  isEnabled: false,
};

export const loader = (state = initialState, action) => {
  switch (action.type) {
    case EnableLoaderAction:
      return {
        ...state,
        isEnabled: true,
      };
    case DisableLoaderAction:
      return {
        ...state,
        isEnabled: false,
      };
    default:
      return {...state};
  }
}
