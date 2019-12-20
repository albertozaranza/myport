import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from '~/pages/Home';

export default function Routes() {
  return (
    <BrowserRouter basename={window.location.pathname || ''}>
      <Switch>
        <Route exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
