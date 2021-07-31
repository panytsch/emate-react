import {Provider} from "react-redux";
import {store} from "./store";
import {Redirect, Route, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";

import {AuthLayout} from "./components/layouts/auth/AuthLayout";
import * as route from './constants/routes';
import {Login} from "./pages/Login/Login";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/'>
                        <Redirect to={route.LOGIN}/>
                    </Route>
                    <AuthLayout>
                        <Route path={route.LOGIN} exact component={Login}/>
                    </AuthLayout>
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
