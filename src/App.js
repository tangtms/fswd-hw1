import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Home from "./screens/Home";
import Launches from "./screens/Launches";
import Rockets from "./screens/rocket/Rockets";

const App = () => {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <LinkContainer to="/">
          <Navbar.Brand>SpaceX</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer exact to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/rockets">
              <Nav.Link>Rockets</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/launches">
              <Nav.Link>Launches</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/rockets">
          <Container className="mt-4">
            <Rockets />
          </Container>
        </Route>
        <Route path="/launches">
          <Container className="mt-4">
            <Launches />
          </Container>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
