import React from 'react'
import { Provider } from "react-redux"
import { mount, shallow } from 'enzyme'
import { MemoryRouter } from 'react-router' // https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/MemoryRouter.md
import { createCommonStore } from "../store";
import toJson from 'enzyme-to-json'
import Routes from './Routes'
import Login from './auth/Login'
import Dashboard from './Dashboard'
import NoMatch from './NoMatch'

const store = createCommonStore();

const routesMount = (path) => {
	return mount(
		<Provider store={store}>
			<MemoryRouter initialEntries={[ path ]} initialIndex={0}>
				<Routes />
			</MemoryRouter>
		</Provider>
	);
};

describe('<Routes /> component', () => {
	it('should save a snapshot', () => {
		const routesComponent = shallow(<Routes />);
		const tree = toJson(routesComponent);
		expect(tree).toMatchSnapshot();
	});

	it('should render Login component when visiting /', () => {
		const routesComponent = routesMount('/');
		expect(routesComponent.find(Login).length).toBe(1);
	});

	it('should render Dashboard component when visiting /dashboard', () => {
		const routesComponent = routesMount('/dashboard');
		expect(routesComponent.find(Dashboard).length).toBe(1);
	});

	it('should render the NoMatch component when visiting invalid path', () => {
		const routesComponent = routesMount('/404');
		expect(routesComponent.find(NoMatch).length).toBe(1);
	});
});