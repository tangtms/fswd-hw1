import React, { useState, useEffect } from "react";
import moment from "moment";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Launch from "./Launch";

const Launches = () => {
  let { path } = useRouteMatch();
  const [state, setState] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://api.spacexdata.com/v3/launches?limit=5"
      );
      const data = await response.json();
      console.log(data);
      setState(data);
    })();
  }, []);
  const launchItems = state.map((state) => (
    <>
      <h4>{state.flight_number}</h4>
      <p>{state.mission_name}</p>
      <p>{state.launch_year}</p>
      <p>{moment.unix(state.launch_date_unix).format("MM/DD/YYYY")}</p>
    </>
  ));
  return (
    <>
      <Switch>
        <Route exact path={path}>
          <h1>Launches</h1>
          <p>{launchItems}</p>
        </Route>
        <Route path={`${path}/:launchId`}>
          <Launch />
        </Route>
      </Switch>
    </>
  );
};

export default Launches;
