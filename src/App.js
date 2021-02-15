import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./screens/Home";
import Launches from "./screens/Launches";
import Rockets from "./screens/Rockets";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rockets">Rockets</Link>
            </li>
            <li>
              <Link to="/launches">Launches</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Container>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/rockets">
            <Rockets />
          </Route>
          <Route path="/launches">
            <Launches />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
