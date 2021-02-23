import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RocketCard from "../../components/RocketCard";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Rocket = () => {
  let { rocketId } = useParams();
  const [rocket, setRocket] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://api.spacexdata.com/v3/rockets/${rocketId}`
      );
      setRocket(await response.json());
    })();
  }, [rocketId]);

  return (
    <div style={{ minHeight: "100vh" }}>
      {rocket && (
        <Row>
          <Col md="8" className="mb-4">
            <Link to="/rockets/">
              <Button className="mb-4">{"< "} Back</Button>
            </Link>
            <RocketCard rocket={rocket} hideButton />
          </Col>
          <Col md="4">
            <p className="h4">Gallery</p>
            <hr />
            {rocket.flickr_images.map((image) => (
              <img
                alt="SpaceX Rocket"
                key={image}
                src={image}
                className="img-fluid rounded mb-2 shadow"
              />
            ))}
          </Col>
        </Row>
      )}
    </div>
  );
};

export default Rocket;
