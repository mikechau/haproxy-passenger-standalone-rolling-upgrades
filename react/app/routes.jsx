'use strict';

import React from 'react';
import { Route, DefaultRoute, Redirect } from 'react-router';

import App from './components/layouts/App';
import Home from './components/pages/Home';

var routes = (
  <Route name='app' handler={App} path="/react">

    <DefaultRoute handler={Home} />

    <Redirect from='/react/' to='/react' />
  </Route>
);

export default routes;
