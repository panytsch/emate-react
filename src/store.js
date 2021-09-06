import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk'
import {auth} from './reducers/auth';
import {loader} from './reducers/loader';
import {getInitialState, persistToSessionStorage} from './middlewares/persistStore';
import {projects} from './reducers/projects';
import {employees} from './reducers/employees';
import {teams} from './reducers/teams';

const reducers = combineReducers({
  auth,
  loader,
  projects,
  employees,
  teams,
});

export const store = createStore(
  reducers,
  getInitialState(),
  compose(
    applyMiddleware(thunk, persistToSessionStorage),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (args) => args,
  ),
);
