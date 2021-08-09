import {Provider} from 'react-redux';
import {store} from './store';
import {Redirect, Route, Switch} from 'react-router';
import {Router} from 'react-router-dom';
import React from 'react';

import {AuthLayout} from './components/layouts/auth/AuthLayout';
import * as route from './constants/routes';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import MainLayout from './components/layouts/main/MainLayout';
import {Profile} from './pages/profile/Profile';
import LoaderLayout from './components/layouts/loader/LoaderLayout';
import {history} from './services/history';


function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <LoaderLayout>
            <Route exact path="/">
              <Redirect to={route.Login}/>
            </Route>
            <Route exact path={[route.Login, route.Register]}>
              <AuthLayout>
                <Switch>
                  <Route path={route.Login} exact component={Login}/>
                  <Route path={route.Register} exact component={Register}/>
                </Switch>
              </AuthLayout>
            </Route>
            <Route exact path={[route.Profile]}>
              <MainLayout>
                <Switch>
                  <Route path={route.Profile} exact component={Profile}/>
                </Switch>
              </MainLayout>
            </Route>
          </LoaderLayout>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
