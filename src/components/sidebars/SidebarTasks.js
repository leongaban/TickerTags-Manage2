import React from 'react'
import PropTypes from 'prop-types'
import TagReportsColumn from './TagReportsColumn'
import TickersReviewColumn from './TickersReviewColumn'

export default function SidebarTasks(props) {
return (
	<section id="sidebar-right">
		<TagReportsColumn />
		<TickersReviewColumn />
	</section>
	)
}