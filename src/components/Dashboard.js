import React from 'react'
import { getCookie } from '../utils/session'
import { getMyTickers } from '../services/tickersFactory'
import TopSearchBar from './common/TopSearchBar'
import SidebarMenu from './sidebars/SidebarMenu'
import SidebarTasks from './sidebars/SidebarTasks'
import TickersTables from './tables/TickersTables'

const milliseconds = (new Date).getTime();

const userModel = {
	id: 133,
	username: 'leongaban',
	role: 'Admin'
};

const tickersFetchParams = {
	user: {},
    type: 'mine',
    tickers: [],
    service_start: 0,
    service_order: 'ticker',
    total: 0,
    date: milliseconds
};

export default function Dashboard(props) {
	let tickers = [];
	tickersFetchParams.user = userModel;

	getMyTickers(tickersFetchParams).then((myTickers) => {
		tickers = myTickers;
	});

	return (
		<div className="h100">
			<TopSearchBar />
			<section id="manage-dashboard">
				<SidebarMenu />
				<TickersTables tickers={ tickers }/>
				<SidebarTasks />
			</section>
		</div>
	)
}