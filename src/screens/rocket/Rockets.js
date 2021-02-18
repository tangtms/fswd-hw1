import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import RocketCard from "../../components/RocketCard";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Rocket from "./Rocket";

const Rockets = () => {
  let { path } = useRouteMatch();
  const [rockets, setRockets] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("https://api.spacexdata.com/v3/rockets");
      setRockets(await response.json());
    })();
  }, []);

  return (
    <Row>
      <Switch>
        <Route exact path={path}>
          {rockets.map((rocket) => (
            <RocketCard key={rocket.id} rocket={rocket} />
          ))}
        </Route>
        <Route path={`${path}/:rocketId`}>
          <Rocket />
        </Route>
      </Switch>
    </Row>
  );
};

export default Rockets;
