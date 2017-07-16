import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import SidebarTasks from './SidebarTasks'
import TagReportsColumn from './TagReportsColumn'
import TickersReviewColumn from './TickersReviewColumn'

const sidebarTasksShallow = shallow(
	<SidebarTasks/>
);

describe('<SidebarTasks /> component', () => {
	it('should render', () => {
		const tree = toJson(SidebarTasks);
		expect(tree).toMatchSnapshot();
	});

	it('should contain the TagReportsColumn component', () => {
		expect(sidebarTasksShallow.find(TagReportsColumn).length).toBe(1);
	});

	it('should contain the TickersReviewColumn component', () => {
		expect(sidebarTasksShallow.find(TickersReviewColumn).length).toBe(1);
	});

	// it('should render the Notification component if state.error is true', () => {
	// 	loginComponent.setState({ error: true });
	// 	expect(loginComponent.find(Notification).length).toBe(1);
	// });
});