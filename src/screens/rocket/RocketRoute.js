import React from "react";
import { Row } from "react-bootstrap";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Rocket from "./Rocket";
import Rockets from "./Rockets";

const RocketsRoute = () => {
  let { path } = useRouteMatch();

  return (
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
  );
};

export default RocketsRoute;
