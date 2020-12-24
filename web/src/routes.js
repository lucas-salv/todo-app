import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import Main from './pages/Main';
import ErrorPage from './pages/ErrorPage';

export default function Routes() {
    return (
        <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/' component={Main} />
            <Route exact path='/create-account' component={CreateAccount} />
            <Route path='*' component={ErrorPage} />
        </Switch>
    )
}