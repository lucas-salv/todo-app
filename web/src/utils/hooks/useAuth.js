import { useState, useEffect } from 'react';

import api from './../api';
import history from './../../history';

export default function useAuth() {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if(token) {
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
            setAuthenticated(true);
        }

        setLoading(false);
    }, []);

    async function handleLogin(email, pass) {
        const { data: { token, user }} = await api.get('/login', {
            auth: {
                username: email,
                password: pass
            }
        });

        localStorage.setItem('token', JSON.stringify(token));
        api.defaults.headers.Authorization = `Bearer ${token}`;
        setAuthenticated(true);
        setUser(user);
        console.log(token, user);
        history.push('/');
    };

    function handleLogout() {
        setAuthenticated(false);
        localStorage.removeItem('token');
        api.defaults.headers.Authorization = undefined;
        history.push('/login');
    };

    return { authenticated, loading, user,  handleLogin, handleLogout};
}