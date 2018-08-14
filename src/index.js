import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store/index.js';
import routes from './routes';


import { getCountries } from './actions/actions-countries'

import DevTools from './DevTools';

render (
	<Provider store = {store}>
		<Router history={hashHistory} routes={routes} />
				{ /* <div>
					<h1>Inicjalizacja projektu</h1>
					<DevTools />
				</div> -
			  */}

	</Provider>,
	document.getElementById('root')
);


store.dispatch(getCountries());