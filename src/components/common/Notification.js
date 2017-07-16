import React from 'react'
import PropTypes from 'prop-types'
import { tagline } from '../../consts/sentences'

const Notification = ({ message, closeMsg }) => {
	return (
		<div className="notification" onClick={ closeMsg }>
			<div className="message">
				<p>{ message }</p>
				<div className="icon-cancel-circled-1"></div>
			</div>
		</div>
	)
}

Notification.propTypes = {
	message: PropTypes.string.isRequired
}

Notification.defaultProps = {
	message: tagline
};

export default Notification