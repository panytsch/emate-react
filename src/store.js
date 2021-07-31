import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk'
import {auth} from './reducers/auth';

const reducers = combineReducers({
    auth,
});

export const store = createStore(reducers, compose(applyMiddleware(thunk)));