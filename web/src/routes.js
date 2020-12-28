import { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import Main from './pages/Main';
import ErrorPage from './pages/ErrorPage';

import { Context } from './utils/AuthContext';

function CustomRoute({ isPrivate, ...rest }) {
    const { loading, authenticated } = useContext(Context);

    if(loading) {
        return <h1>Loading...</h1>
    }

    if(isPrivate && !authenticated) {
        return <Redirect to="/login" />
    }

    return <Route {...rest} />
}

export default function Routes() {
    return (
        <Switch>
            <CustomRoute exact path='/login' component={Login} />
            <CustomRoute isPrivate exact path='/' component={Main} />
            <CustomRoute exact path='/create-account' component={CreateAccount} />
            <CustomRoute path='*' component={ErrorPage} />
        </Switch>
    )
}