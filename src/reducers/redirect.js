import {CleanPathAction, RedirectToAction} from "../actions/redirect";
import {history} from '../services/history';

const initialState = {};

export const redirect = (state = initialState, action) => {
    switch (action.type) {
        case RedirectToAction:
            history.push(action.path);
            return {...state};
        case CleanPathAction:
          return {...state};
      default:
            return {...state};
    }
}
