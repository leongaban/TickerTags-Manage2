import React from 'react'
import jwt from 'jsonwebtoken'
import { not } from 'ramda'
import { getLoginInputs, loginFormFilled, validEmail } from '../../utils/validation'
import * as session from '../../utils/session'
// import { setCurrentUser } from '../../actions/authActions'
import { error401, invalidLogin, notifyDev, missingLogin } from '../../consts/errors'
import { tagline } from '../../consts/sentences'
import * as api from '../../services/api'
import Notification from '../common/Notification'

class Login extends React.Component {
	constructor(props) {
		super(props)
		// console.log('props', props);

        this.state = {
            username: '',
            password: '',
            error: false,
            errorMsg: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeMessage = this.closeMessage.bind(this);
	}

    handleChange(e) {
    	this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = this.state.username;
        const pass = this.state.password;

        const gotoDashboard = (res) => {
			const user = res.data.user;
        	const ws_token_cookie = session.getCookie("_ws_token");
        	// console.log('ws_token_cookie', ws_token_cookie);
        	// session.addLocalStorage(ws_token_cookie);
        	// session.setAuthorizationToken(ws_token_cookie);
        	console.log('user', user);
        	// this.props.setUser(user);
        	// dispatch(setCurrentUser(user));

        	// console.log(' jwt', jwt);
        	// console.log('  jwt.decode(ws_token_cookie)', jwt.decode(ws_token_cookie, { complete: true }));
        	this.props.history.push('/dashboard');
        };

        const postLogin = (user, pass) => {
			api.userLogin(user, pass)
				.then((res) => {
					if (res.toString() === error401) {
						return this.setState({
							error: true,
							errorMsg: invalidLogin
						});
					}

					if (res.status && res.status === 200) {
						this.setState({
							error: false,
							errorMsg: ''
						});
						gotoDashboard(res);
					}
					else {
						return this.setState({
							error: true,
							errorMsg: notifyDev
						});
					}
				});
		};

        loginFormFilled(user, pass)
        	? postLogin(user, pass)
        	: this.setState({
        		error: true,
        		errorMsg: missingLogin
        	});
    }

    closeMessage() {
    	this.setState({ error: false, errorMsg: '' });
    }

	render() {
		const usernameError = this.state.username.error;
		const error = this.state.error;
		const errorMsg = this.state.errorMsg;

		return (
			<div className="app-bg">
				{ error &&
					<Notification message={ errorMsg } closeMsg={ this.closeMessage }/>
				}
                <section id="auth-section">
                	<header>
	                	<img src="static/imgs/logo.png"/>
	                	<h1>{ tagline }</h1>
                	</header>
                	<div className="login-form">
	                	<form onSubmit={ this.handleSubmit } className="form-login">
	                        <ul>
	                            <li className="rel">
	                            	<div className="icon-user-circle-o"></div>
	                                <input type="text"
	                                       id="input-auth-username"
	                                       name="username"
	                                       placeholder="username"
	                                       onChange={ this.handleChange } />
	                            </li>
	                            <li className="rel">
	                            	<div className="icon-lock"></div>
	                                <input type="password"
	                                       id="input-auth-password"
	                                       name="password"
	                                       placeholder="password"
	                                       onChange={ this.handleChange } />
	                            </li>
	                            <li>
	                                <button className="btn-green" type="submit">Login</button>
	                            </li>
	                            <li>
	                                <a href="/forgot" className="small-auth-link">
	                                    <p>Forgot Password</p>
	                                </a>
	                                <footer> &copy; { new Date().getFullYear() } TickerTags</footer>
	                            </li>
	                        </ul>
	                    </form>
					</div>
                </section>
			</div>
		)
	}
}

export default Login