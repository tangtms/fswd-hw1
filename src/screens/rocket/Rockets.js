import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import RocketCard from "../../components/RocketCard";
import { Row, Col } from "react-bootstrap";

const Rockets = () => {
  const [rockets, setRockets] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch("https://api.spacexdata.com/v3/rockets");
      setRockets(await response.json());
    })();
  }, []);

  return (
    <Row>
      <Col md="12">
        <h2>Rockets</h2>
      </Col>
      {rockets &&
        rockets.map((rocket) => (
          <>
            <Col
              md="6"
              className="d-flex justify-content-center align-middle"
              style={{
                alignItems: "center",
              }}
            >
              <LazyLoadImage
                class="img-fluid rounded shadow"
                alt="Card Bottom"
                src={rocket.flickr_images[0]}
                width="500"
                height="400"
                placeholderSrc={`${process.env.PUBLIC_URL}/loading-min.webp`}
              />
            </Col>
            <Col md="6" className="mb-4">
              <RocketCard key={rocket.id} rocket={rocket} fullHeight />
            </Col>
          </>
        ))}
    </Row>
  );
};

export default Rockets;
