import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setCookieAccessToken = (token) => {
    return cookies.set('token', token);
}

export const getCookieAccessToken = () => {
    return cookies.get('token');
}

export const removeCookieAccessToken = () => {
    return cookies.remove('token');
}