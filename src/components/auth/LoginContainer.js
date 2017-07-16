import React from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from 'redux';
import { setCurrentUser } from '../../actions/authActions'
import Login from './Login'

const mapDispatchToProps = (dispatch) => {
	return {
		setUser: (user) => {
			bindActionCreators(setCurrentUser(user), dispatch)
		}
	}
};

export default connect(null, mapDispatchToProps)(Login); 