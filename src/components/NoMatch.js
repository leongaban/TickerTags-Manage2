import React from 'react'

const NoMatch = () => {
	return (
		<div className="app-bg">
			<section id="auth-section">
				<header>
	            	<img src="static/imgs/logo.png"/>
	            	<h1>Oops!<br/> We could not find that...</h1>
	            	<h2>Try the links below:</h2>
	        	</header>
	        	<section className="missing-links">
	        		<ul>
	        			<li>
	        				<a href="/">Login</a>
	        			</li>
	        			<li>
	        				<a href="/forgot">Forgot Password</a>
	        			</li>
	        			<li>
	        				<a href="https://www.tickertags.com/help.html" target="_blank">TickerTags Help</a>
	        			</li>
	        			<li>
	        				<a href="https://www.tickertags.com" target="_blank">Marketing site</a>
	        			</li>
	        		</ul>
	        	</section>
	        	<footer> &copy; { new Date().getFullYear() } TickerTags</footer>
        	</section>
		</div>
	)
}

export default NoMatch