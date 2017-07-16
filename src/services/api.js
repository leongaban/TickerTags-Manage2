import axios from 'axios'
import endpoints from './endpoints'

const api = endpoints();
const log = (method, err) => {
	console.warn(`%c${method}`, 'background: #393939; color: #F25A43', err);
	return err;
};

// Auth ////////////////////////////////////////////////////////////////////////
export const userLogin = (username, password) => {
    const post_data = { username, password };
    return axios.post(api.login, post_data)
    	.then(res => res)
    	.catch(err => log('api.userLogin', err));
};

// Tickers /////////////////////////////////////////////////////////////////////
export const getTickersManage = (params) => 
	axios.get(api.tickersManage+params)
		.then(res => res.data.tickers.data)
		.catch(err => log('api.tickersManage', err));