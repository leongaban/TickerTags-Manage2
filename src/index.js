import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import { createCommonStore } from "./store";
import App from './App'
import css from './manage2.scss'

const store = createCommonStore();
const element = document.getElementById('manage2');
// console.log("Index.js Default store", store.getState());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, element);