import React, { lazy, Suspense } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { Container } from "react-bootstrap";
import PageHero from "../../components/PageHero";
const Launch = lazy(() => import("./Launch"));
const Launches = lazy(() => import("./Launches"));

const LaunchRoute = () => {
  let { path } = useRouteMatch();
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path={path}>
            <PageHero
              title="Launches"
              subtitle={
                <>
                  Every experimental, commercially and officially launches even
                  the one that failed
                  <br />
                  All from SpaceX included in once place
                </>
              }
            />
            <Container className="mt-4 mb-5">
              <Launches />
            </Container>
          </Route>
          <Route path={`${path}/:launchId`}>
            <PageHero
              title="Launch Detail"
              subtitle={
                <>
                  One launch
                  <br />
                  One more step toward Mars
                </>
              }
            />
            <Container className="mt-4 mb-5">
              <Launch />
            </Container>
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default LaunchRoute;
