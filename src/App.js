import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Home from "./screens/Home";
import Launches from "./screens/Launches";
import Rockets from "./screens/Rockets";

const App = () => {
  return (
    <Router>
      <Navbar bg="light" expand="lg" className="mb-4">
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
