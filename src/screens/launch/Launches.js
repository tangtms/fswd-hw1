import React, { useState, useEffect } from "react";
import { Badge, Card, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Launches = () => {
  const [state, setState] = useState([]);
  const [api, setApi] = useState(
    "https://api.spacexdata.com/v3/launches?limit=6"
  );
  useEffect(() => {
    (async () => {
      const response = await fetch(api);
      const data = await response.json();
      console.log(data);
      setState(data);
    })();
  }, []);

  // const filterYear(event) => {this.setApi("")};

  const launchItems = state.map((state) => {
    const launchDate = new Date(state.launch_date_unix * 1000);
    return (
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={state.links.mission_patch} />
          <Card.Body>
            <Card.Title>{state.mission_name}</Card.Title>
            <Card.Text>
              {state.launch_year}
              {launchDate.toString()}
            </Card.Text>
            <Link to={`/launches/${state.flight_number}`}>
              <Button variant="primary">More Details {">"}</Button>
            </Link>
          </Card.Body>
        </Card>
        {/* <h4>{state.flight_number}</h4>
        <img src={state.links.mission_patch} />
        <p>{state.mission_name}</p>
        <p>{state.launch_year}</p>
        <p>{launchDate.toString()}</p> */}
      </Col>
    );
  });
  return (
    <>
      <h1>Launches</h1>
      {/* <select value={state.value}>
        <option value="2007">2007</option>
        <option value="2008">2008</option>
        <option value="2009">2009</option>
        <option value="2010">2010</option>
      </select> */}
      <Row>{launchItems}</Row>
    </>
  );
};

export default Launches;
