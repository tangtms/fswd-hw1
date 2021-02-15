import React, { useState, useEffect } from "react";
import { Badge, Card } from "react-bootstrap";

const RocketCard = ({ rocket }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{rocket.rocket_name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          <Badge pill variant={rocket.active ? "success" : "danger"}>
            {rocket.active ? "Active" : "Inactive"}
          </Badge>
        </Card.Subtitle>
        <Card.Text>{rocket.description}</Card.Text>
        <Card.Link href={rocket.wikipedia}>Wikipedia</Card.Link>
      </Card.Body>
    </Card>
  );
};

const Rockets = () => {
  const [rockets, setRockets] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("https://api.spacexdata.com/v3/rockets");
      setRockets(await response.json());
    })();
  }, []);

  return (
    <p>
      {rockets.map((rocket) => (
        <RocketCard key={rocket.id} rocket={rocket} />
      ))}
    </p>
  );
};

export default Rockets;
