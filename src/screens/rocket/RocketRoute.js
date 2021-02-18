import React, { lazy, Suspense } from "react";
import { Row } from "react-bootstrap";
import { Switch, Route, useRouteMatch } from "react-router-dom";
const Rocket = lazy(() => import("./Rocket"));
const Rockets = lazy(() => import("./Rockets"));

const RocketsRoute = () => {
  let { path } = useRouteMatch();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Row>
        <Switch>
          <Route exact path={path}>
            <Rockets />
          </Route>
          <Route path={`${path}/:rocketId`}>
            <Rocket />
          </Route>
        </Switch>
      </Row>
    </Suspense>
  );
};

export default RocketsRoute;
