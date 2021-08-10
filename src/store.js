import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk'
import {auth} from './reducers/auth';
import {loader} from './reducers/loader';
import {persistToSessionStorage} from './middlewares/persistStore';

const reducers = combineReducers({
  auth,
  loader,
});

export const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk, persistToSessionStorage),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (args) => args,
  ),
);
