import React from 'react'
import PropTypes from 'prop-types'
export default function SidebarMenu(props) {
	return (
		<section id="sidebar-left">
			<nav>
				<ul>
					<li>
						<div className="icon">
							<div className="icon-text-height ico"></div>
						</div>
						<a href="#">My Tickers</a>
					</li>
					<li>
						<div className="icon">
							<div className="icon-list-alt ico"></div>
						</div>
						<a href="#">Analytic Reports</a>
					</li>
					<li>
						<div className="icon">
							<div className="icon-attention ico"></div>
						</div>
						<a href="#">Tag Reports</a>
					</li>
					<li>
						<div className="icon">
							<div className="icon-sort-name-up ico"></div>
						</div>
						<a href="#">Tickers Review</a>
					</li>
					<li>
						<div className="icon">
							<div className="icon-tags ico"></div>
						</div>
						<a href="#">Bulk Add Tags</a>
					</li>
					<li>
						<div className="icon">
							<div className="icon-tags-1 ico"></div>
						</div>
						<a href="#">Bulk Event Tags</a>
					</li>
					<li>
						<div className="icon">
							<div className="icon-users ico"></div>
						</div>
						<a href="#">Users</a>
					</li>
					<li>
						<div className="icon">
							<div className="icon-code ico"></div>
						</div>
						<a href="#">Rest API</a>
					</li>
					<li>
						<div className="icon">
							<div className="icon-pencil ico"></div>
						</div>
						<a href="#">Topic Annotation</a>
					</li>
					<li>
						<div className="icon">
							<div className="icon-upload-cloud ico"></div>
						</div>
						<a href="#">Deploy Blog</a>
					</li>
				</ul>
			</nav>
		</section>
	)
}