import { useState, useEffect } from 'react';

import api from './../api';
import history from './../../history';

export default function useAuth() {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    //const [error, setError] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if(token) {
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
            setAuthenticated(true);
        }

        setLoading(false);
    }, []);

    async function handleLogin(email, pass) {
        const { data: { token }, /*statusText: {status} */} = await api.get('/login', {
            auth: {
                username: email,
                password: pass
            }
        });

        // criar uma função para tratar possiveis erros q vem da api

        localStorage.setItem('token', JSON.stringify(token));
        api.defaults.headers.Authorization = `Bearer ${token}`;
        setAuthenticated(true);
        history.push('/');
    };

    function handleLogout() {
        setAuthenticated(false);
        localStorage.removeItem('token');
        api.defaults.headers.Authorization = undefined;
        history.push('/login');
    };

    return { authenticated, loading, handleLogin, handleLogout};
}