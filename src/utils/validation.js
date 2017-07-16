import { notEmpty } from './utility'

export const getLoginInputs = (type) => {
	const input_type = `input-auth-${type}`;
	return document.getElementById(input_type).value;
};

export const validEmail = (email) => {
    const regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regx.test(email);
};

export const loginFormFilled = (user, pass) => notEmpty(user) && notEmpty(pass);