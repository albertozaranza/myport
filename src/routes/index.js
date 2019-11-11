import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from '~/pages/Home';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={`${process.env.PUBLIC_URL}/`} exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
