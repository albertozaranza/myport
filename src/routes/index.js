import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from '~/pages/Home';

export default function Routes() {
  return (
    <BrowserRouter basename="/myport">
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
