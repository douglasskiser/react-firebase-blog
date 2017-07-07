import React from 'react';
import { Provider } from 'react-redux';
import { createStore, history } from './store';
import { ConnectedRouter } from 'react-router-redux';
import Router from './router';

import './app.css';

export default props => (
  <Provider store={createStore({})}>
    <ConnectedRouter history={history}>
      <Router {...props}/>
    </ConnectedRouter>
  </Provider>
);
