import React from 'react'

class TopSearchBar extends React.Component {
	render() {
		return (
			<div className="top-search-bar">
				<section className="fl">
					<div className="search-tickers fl">
						<input type="text" placeholder="Search Tickers"/>
						<button className="btn-blue rounded-right">Search</button>
					</div>
					<div className="add-tickers fl ml0">
						<button className="btn-blue">Add Tickers</button>
					</div>
				</section>
				<section className="fl">
					<div className="search-tags fl">
						<input type="text" placeholder="Search Tags"/>
						<button className="btn-blue rounded-right">Search</button>
					</div>
					<div className="add-tag fl ml0">
						<button className="btn-blue">Add Tag</button>
					</div>
				</section>
				<section className="username-top">
					<span>Willkommen leongaban!</span>
					<div className="user-btn">
						<p>Logout</p>
						<div className="icon-logout fr"></div>
					</div>
					<p>|</p>
					<div className="user-btn">
						<p>Settings</p>
						<div className="icon-cog fr"></div>
					</div>
				</section>
			</div>
		)
	}
}

export default TopSearchBar;