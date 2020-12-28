import { createContext } from 'react';

import useAuth from './hooks/useAuth';

const Context = createContext();

function AuthProvider({ children }) {
    const {
        authenticated, loading, user, handleLogin, handleLogout,
    } = useAuth();

    return (
        <Context.Provider value={{ loading, authenticated, user, handleLogin, handleLogout }}>
            { children }
        </Context.Provider>
    );
}

export { Context, AuthProvider };