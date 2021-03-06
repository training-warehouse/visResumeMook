import React from 'react';
import {HashRouter, Route, Switch, Redirect} from "react-router-dom";
import Root from "./container/root";

function Router() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact>
          <Root />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default Router;
