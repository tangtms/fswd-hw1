import React, { lazy, Suspense } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
const Launch = lazy(() => import("./Launch"));
const Launches = lazy(() => import("./Launches"));

const LaunchRoute = () => {
  let { path } = useRouteMatch();
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path={path}>
            <Launches />
          </Route>
          <Route path={`${path}/:launchId`}>
            <Launch />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default LaunchRoute;
