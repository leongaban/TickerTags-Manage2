import React from 'react'
import { shallow } from 'enzyme'
import { getMyTickers } from '../services/tickersFactory'
jest.mock('../services/tickersFactory');
import toJson from 'enzyme-to-json'
import Dashboard from './Dashboard'
import TopSearchBar from './common/TopSearchBar'
import SidebarMenu from './sidebars/SidebarMenu'
import SidebarTasks from './sidebars/SidebarTasks'

const dashboardComponent = shallow(<Dashboard />);
const milliseconds = (new Date).getTime();

const userModel = {
	id: 133,
	username: 'leongaban',
	role: 'Admin'
};

const tickersFetchParams = {
	user: userModel,
    type: 'mine',
    tickers: [],
    service_start: 0,
    service_order: 'ticker',
    total: 0,
    date: milliseconds
};

const testing = {
    active: 1,
    company_name: "TickerTags Test",
    exchange: "",
    formatted_date: "March 20, 2017",
    industry: "",
    library_update_epoch: 1490008440,
    longname: "TickerTags Test",
    sector: "",
    ticker: "$TESTING",
    trading: 0,
    user_id: 133,
    username: "leongaban"
};

describe('<Dashboard /> component', () => {
	it('should render', () => {
		const tree = toJson(dashboardComponent);
		expect(tree).toMatchSnapshot();
	});

	it('should contain the TopSearchBar', () => {
		expect(dashboardComponent.contains(<TopSearchBar />)).toBe(true);
	});

	it('should contain the SidebarMenu', () => {
		expect(dashboardComponent.contains(<SidebarMenu />)).toBe(true);
	});

	it('should contain the SidebarTasks', () => {
		expect(dashboardComponent.contains(<SidebarTasks />)).toBe(true);
	});

	it("should make a request for and get back a list of the user's tickers", () => {
		// expect.assertions(1);
		return getMyTickers(tickersFetchParams).then(tickers => {
			expect(tickers[0]).toEqual(testing);
		});
	});
});