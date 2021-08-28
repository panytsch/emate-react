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
import Projects from './pages/Projects/Projects';
import NewProject from './pages/NewProject/NewProject';
import Teams from './pages/Teams/Teams';
import NewTeam from './pages/NewTeam/NewTeam';
import Employees from './pages/Employees/Employees';
import NewEmployee from './pages/NewEmployee/NewEmployee';
import EditProject from './pages/EditProject/EditProject';
import EditEmployee from './pages/EditEmployee/EditEmployee';


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
            <MainLayout>
              <Switch>
                <Route path={route.Profile} exact component={Profile}/>
                <Route path={route.Projects}>
                  <Route path={route.Projects} exact component={Projects}/>
                  <Route path={route.NewProject} exact component={NewProject}/>
                  <Route path={route.EditProject} exact component={EditProject}/>
                </Route>
                <Route path={route.Teams}>
                  <Route path={route.Teams} exact component={Teams}/>
                  <Route path={route.NewTeam} exact component={NewTeam}/>
                </Route>
                <Route path={route.Employees}>
                  <Route path={route.Employees} exact component={Employees}/>
                  <Route path={route.NewEmployee} exact component={NewEmployee}/>
                  <Route path={route.EditEmployee} exact component={EditEmployee}/>
                </Route>
              </Switch>
            </MainLayout>
          </LoaderLayout>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
