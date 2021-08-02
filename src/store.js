import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk'
import {auth} from './reducers/auth';
import {redirect} from './reducers/redirect';
import {loader} from './reducers/loader';

const reducers = combineReducers({
  auth,
  redirect,
  loader,
});

export const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);
