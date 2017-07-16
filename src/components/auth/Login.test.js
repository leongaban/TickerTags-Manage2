import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { missingLogin } from '../../consts/errors'
import Login from './Login'
import Notification from '../common/Notification'

const user = {
	id: 1,
	role: 'Admin',
	username: 'leongaban'
};

const loginComponent = shallow(
	<Login/>
);

const fakeEvent = { preventDefault: () => '' };

describe('<Login /> component', () => {
	it('should render', () => {
		const tree = toJson(loginComponent);
		expect(tree).toMatchSnapshot();
	});

	it('should contain the words "Forgot Password"', () => {
		expect(loginComponent.contains('Forgot Password')).toBe(true);
	});

	it('should render the Notification component if state.error is true', () => {
		loginComponent.setState({ error: true });
		expect(loginComponent.find(Notification).length).toBe(1);
	});
});

describe('User Login', () => {
	it('should fail if no credentials are provided', () => {
		expect(loginComponent.find('.form-login').length).toBe(1);
		loginComponent.find('.form-login').simulate('submit', fakeEvent);
		expect(loginComponent.find(Notification).length).toBe(1);
		const notificationComponent = shallow(<Notification message={ missingLogin }/>);
		expect(notificationComponent.text()).toEqual('Please fill out both username and password.');
	});

	it('input fields should be filled correctly', () => {
		const credentials = { username: 'leongaban', password: 'testpass' };
		expect(loginComponent.find('#input-auth-username').length).toBe(1);

		const usernameInput = loginComponent.find('#input-auth-username');
		usernameInput.value = credentials.username;
		expect(usernameInput.value).toBe('leongaban');
		
		const passwordInput = loginComponent.find('#input-auth-password');
		passwordInput.value = credentials.password;
		expect(passwordInput.value).toBe('testpass');
	});
});