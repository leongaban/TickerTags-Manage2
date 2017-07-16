import React from 'react'

class TickersReviewColumn extends React.Component {
	constructor(props) {
		super(props)
        this.state = {};
	}

	render() {
		return (
			<section className="tickers-review">
				<h1>Tickers Review</h1>
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

export default TickersReviewColumn