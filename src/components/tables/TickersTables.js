import React from 'react'
import PropTypes from 'prop-types'
export default function TickersTables(props) {

const tickers = props.tickers;
console.log('TickersTables tickers', tickers);

return (
	<section id="section-body">
		<div className="tables-tickers-container">
			<h1>My Tickers / All Tickers</h1>
			<table>
				<thead>
					<tr>
						<td></td>
						<td>Ticker</td>
						<td>Company</td>
						<td>Username</td>
						<td>Last Update</td>
						<td>Reported Tags</td>
						<td className="tright">Export</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<div className="trading off"></div>
						</td>
						<td>
							<div className="ticker">$TESTING</div>
						</td>
						<td><p>TickerTags Test</p></td>
						<td><p>leongaban</p></td>
						<td><p>June 5, 2017</p></td>
						<td><p>0</p></td>
						<td><button className="btn-gray fr">Export</button></td>
					</tr>
					<tr>
						<td>
							<div className="trading on"></div>
						</td>
						<td>
							<div className="ticker">AAPL</div>
						</td>
						<td><p>Apple, Inc</p></td>
						<td><p>leongaban</p></td>
						<td><p>June 5, 2017</p></td>
						<td><p>0</p></td>
						<td><button className="btn-gray fr">Export</button></td>
					</tr>
					<tr>
						<td>
							<div className="trading on"></div>
						</td>
						<td>
							<div className="ticker">GOOG</div>
						</td>
						<td><p>Google, Inc</p></td>
						<td><p>leongaban</p></td>
						<td><p>June 5, 2017</p></td>
						<td><p>0</p></td>
						<td><button className="btn-gray fr">Export</button></td>
					</tr>
					<tr>
						<td>
							<div className="trading off"></div>
						</td>
						<td>
							<div className="ticker">ARWAU</div>
						</td>
						<td><p>Arowana Inc</p></td>
						<td><p>leongaban</p></td>
						<td><p>June 5, 2017</p></td>
						<td><p>0</p></td>
						<td><button className="btn-gray fr">Export</button></td>
					</tr>
					<tr>
						<td>
							<div className="trading on"></div>
						</td>
						<td>
							<div className="ticker">FB</div>
						</td>
						<td><p>Facebook</p></td>
						<td><p>leongaban</p></td>
						<td><p>June 5, 2017</p></td>
						<td><p>0</p></td>
						<td><button className="btn-gray fr">Export</button></td>
					</tr>
					<tr>
						<td>
							<div className="trading on"></div>
						</td>
						<td>
							<div className="ticker">LGY</div>
						</td>
						<td><p>Lion's Gate</p></td>
						<td><p>leongaban</p></td>
						<td><p>June 14, 2017</p></td>
						<td><p>0</p></td>
						<td><button className="btn-gray fr">Export</button></td>
					</tr>
					<tr>
						<td>
							<div className="trading on"></div>
						</td>
						<td>
							<div className="ticker">TSLA</div>
						</td>
						<td><p>Teslas</p></td>
						<td><p>leongaban</p></td>
						<td><p>June 2, 2017</p></td>
						<td><p>0</p></td>
						<td><button className="btn-gray fr">Export</button></td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>
	)
}