import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import Time from "./Time";
import Counter from "./Counter";
import Lifecycle from "./Lifecycle";
import Hooks from "./Hooks";
import Nav from "./Nav";

const Routes = () => {
  return (
    <Router>
      <Nav />
      <div id="container">
        <Switch>
          <Route path={`/`} exact component={App} />
          <Route path={`/counter`} component={Counter} />
          <Route path={`/time`} component={Time} />
          <Route path={`/lifecycle`} component={Lifecycle} />
          <Route path={`/hooks`} component={Hooks} />
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
