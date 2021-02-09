import { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import Main from './pages/Main';
import ErrorPage from './pages/ErrorPage';
import Loading from './components/Loading';
import { Context } from './utils/AuthContext';
import styled from 'styled-components';

const LoaderContainer = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;

function CustomRoute({ isPrivate, ...rest }) {
    const { loading, authenticated } = useContext(Context);

    if(loading) {
        return (
            <LoaderContainer>
                <Loading />
            </LoaderContainer>
        )
    }

    if(isPrivate && !authenticated) {
        return <Redirect to="/login" />
    }

    return <Route {...rest} />
}

export default function Routes({ setTheme, theme }) {
    return (
        <Switch>
            <CustomRoute exact path='/login' component={Login} />
            <CustomRoute isPrivate exact path='/' component={() => <Main setTheme={setTheme} theme={theme}/>} />
            <CustomRoute exact path='/create-account' component={CreateAccount} />
            <CustomRoute path='*' component={ErrorPage} />
        </Switch>
    )
}