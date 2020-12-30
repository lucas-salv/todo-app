import { useState, useEffect } from 'react';

import api from './../api';
import history from './../../history';
import errorFunction from './../errorFunction';

export default function useAuth() {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if(token) {
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
            setAuthenticated(true);
        }

        setLoading(false);
    }, []);

    async function handleLogin(email, pass) {
        try {
            const { data: { token } } = await api.get('/login', {
                auth: {
                    username: email,
                    password: pass
                }
            });
    
            localStorage.setItem('token', JSON.stringify(token));
            api.defaults.headers.Authorization = `Bearer ${token}`;
            setAuthenticated(true);
            setError(false);
            history.push('/');
        } catch(err) {
            const r = errorFunction(err.response.status);
            setError(r);
        }
    };

    function handleLogout() {
        setAuthenticated(false);
        localStorage.removeItem('token');
        api.defaults.headers.Authorization = undefined;
        history.push('/login');
    };

    return { authenticated, loading, error, setError, handleLogin, handleLogout};
}