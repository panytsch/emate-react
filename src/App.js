import {Provider} from "react-redux";
import {store} from "./store";
import {Redirect, Route, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";
import React from "react";

import {AuthLayout} from "./components/layouts/auth/AuthLayout";
import * as route from './constants/routes';
import {Login} from "./pages/Login/Login";
import {Register} from "./pages/Register/Register";
import {MainLayout} from "./components/layouts/main/MainLayout";
import {Profile} from "./pages/profile/Profile";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/'>
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
                    <Route>
                        <MainLayout>
                            <Switch>
                                <Route path={route.Profile} exact component={Profile}/>
                            </Switch>
                        </MainLayout>
                    </Route>
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
