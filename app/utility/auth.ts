// auth.ts

import Cookies from 'js-cookie';

export const setAuthToken = (token: string) => {
    Cookies.set('authToken', token, {
        expires: 30, // 30 days
        path: '/',
    });
};

export const removeAuthToken = () => {
    Cookies.remove('authToken');
};

export const getAuthToken = () => {
    return Cookies.get('authToken');
};
