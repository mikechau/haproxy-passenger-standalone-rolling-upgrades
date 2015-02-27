'use strict';

import React from 'react';
import { RouteHandler, State as RouterState } from 'react-router';
import TopNavBar from './nav/TopNavBar';

var App = React.createClass({
  mixins: [RouterState],

  render() {
    return(
      <div>
        <TopNavBar />
        <RouteHandler />
      </div>
    );
  }
});

export default App;
