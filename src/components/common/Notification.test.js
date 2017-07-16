import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Notification from '../common/Notification'

const notificationComponent = shallow(<Notification />);

describe('<Notification /> component', () => {
	it('should render', () => {
		const tree = toJson(notificationComponent);
		expect(tree).toMatchSnapshot();
	});
});