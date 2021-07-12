import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import Time from "./Time";
import Counter from "./Counter";
import Lifecycle from "./Lifecycle";
import Nav from "./Nav";

const Routes = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path={`/`} exact component={App} />
        <Route path={`/counter`} component={Counter} />
        <Route path={`/time`} component={Time} />
        <Route path={`/lifecycle`} component={Lifecycle} />
      </Switch>
    </Router>
  );
};

export default Routes;
