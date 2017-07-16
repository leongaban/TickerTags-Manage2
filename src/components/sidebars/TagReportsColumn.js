import React from 'react'

class TagReportsColumn extends React.Component {
	constructor(props) {
		super(props)
        this.state = {};
	}

	render() {
		return (
			<section className="tag-reports">
				<h1>Tag Reports</h1>
				<div>
					<table>
						<thead></thead>
						<tbody></tbody>
					</table>
				</div>
			</section>
		)
	}
}

export default TagReportsColumn