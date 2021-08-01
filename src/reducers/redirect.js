import {CleanPathAction, RedirectToAction} from "../actions/redirect";
import createHistory from "history/createBrowserHistory";

const initialState = {};
const history = createHistory();

export const redirect = (state = initialState, action) => {
    switch (action.type) {
        case RedirectToAction:
            history.push(action.path);
            return {
                ...state,
            };
        case CleanPathAction:
            return {
                ...state,
            };
        default:
            return {...state};
    }
}
