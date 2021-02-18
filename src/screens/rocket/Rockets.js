import React, { useState, useEffect } from "react";
import RocketCard from "../../components/RocketCard";
import { Row } from "react-bootstrap";

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
        <RocketCard key={rocket.id} rocket={rocket} />
      ))}
    </Row>
  );
};

export default Rockets;
