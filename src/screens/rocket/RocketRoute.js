import React, { lazy, Suspense } from "react";
import { Container, Row } from "react-bootstrap";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import PageHero from "../../components/PageHero";
const Rocket = lazy(() => import("./Rocket"));
const Rockets = lazy(() => import("./Rockets"));

const RocketsRoute = () => {
  let { path } = useRouteMatch();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path={path}>
          <PageHero
            title="Rockets"
            subtitle={
              <>
                All the rockets build, maintain, engineered and launch by SpaceX
                <br />
                Including both Falcon and Starship rocket family
              </>
            }
          />
          <Container className="mt-4 mb-5">
            <Rockets />
          </Container>
        </Route>
        <Route path={`${path}/:rocketId`}>
          <Container className="mt-4 mb-5">
            <Rocket />
          </Container>
        </Route>
      </Switch>
    </Suspense>
  );
};

export default RocketsRoute;
