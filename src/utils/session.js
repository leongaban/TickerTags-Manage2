import axios from 'axios'

export const getCookie = (name) => {
	let dc, prefix, begin, end;
	dc = document.cookie;
    prefix = name + "=";
    begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    } else {
        begin += 2;
        end = document.cookie.indexOf(";", begin);
        if (end == -1) end = dc.length;
    }
    
    return decodeURI(dc.substring(begin + prefix.length, end));
};

export const addLocalStorage = (token) => localStorage.setItem('jwtToken', token);

export const setAuthorizationToken = (token) => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};