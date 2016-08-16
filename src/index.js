import React from 'react';
import { render } from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/reducers';
import { syncHistory } from 'react-router-redux';
import { hashHistory, Router } from 'react-router';
// import Doctor from './components/doctor/index.js';
// import Health from './components/healthRecord/index.js';
// require('antd/dist/antd.css');
import styles from 'antd/dist/antd.min.css';
require('./assets/stylesheets/antd.css');

const rootElement = document.getElementById('app');

// Sync dispatched route actions to the history
const reduxRouterMiddleware = syncHistory(hashHistory);
const createStoreWithMiddleware = applyMiddleware(
  reduxRouterMiddleware,
  thunkMiddleware
)(createStore);


const store = createStoreWithMiddleware(
  reducers,
  window.devToolsExtension ? window.devToolsExtension() : undefined
);

reduxRouterMiddleware.listenForReplays(store);

console.log('store', store.getState());

import routes from './routes';

render(
  <Provider store={store}>
    {/* Your root Component */}
    <Router history={hashHistory}>
      {routes}
    </Router>
  </Provider>,
  rootElement
);
