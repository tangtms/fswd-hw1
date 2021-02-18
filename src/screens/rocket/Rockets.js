import React, { useState, useEffect } from "react";
import RocketCard from "../../components/RocketCard";
import { Row, Col } from "react-bootstrap";

const Rockets = () => {
  const [rockets, setRockets] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("https://api.spacexdata.com/v3/rockets");
      setRockets(await response.json());
    })();
  }, []);

  return (
    <Row>
      {rockets.map((rocket) => (
        <Col md="6" className="mb-4">
          <RocketCard key={rocket.id} rocket={rocket} fullHeight />
        </Col>
      ))}
    </Row>
  );
};

export default Rockets;
