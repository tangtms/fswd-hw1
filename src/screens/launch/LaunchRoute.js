import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Launch from "./Launch";
import Launches from "./Launches";

const LaunchRoute = () => {
  let { path } = useRouteMatch();
  return (
    <>
      <Switch>
        <Route exact path={path}>
          <Launches />
        </Route>
        <Route path={`${path}/:launchId`}>
          <Launch />
        </Route>
      </Switch>
    </>
  );
};

export default LaunchRoute;
