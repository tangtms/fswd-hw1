import React, { useState, useEffect } from "react";
import RocketCard from "../../components/RocketCard";
import { Row, Col, Card } from "react-bootstrap";
import ReactPlaceholder from "react-placeholder";

const RocketRowPlaceholder = () => {
  return (
    <>
      <Col
        md="6"
        className="d-flex justify-content-center align-middle mb-4"
        style={{
          alignItems: "center",
        }}
      >
        <div
          className="img-fluid rounded shadow"
          style={{
            width: 500,
            height: 400,
            backgroundColor: "#C4C4C4",
          }}
        />
      </Col>
      <Col md="6" className="mb-4">
        <Card>
          <Card.Body>
            <ReactPlaceholder ready={false} type="textRow" className="mb-4" />
            <ReactPlaceholder ready={false} type="text" rows={4} />
            <hr />
            <ReactPlaceholder
              ready={false}
              type="text"
              rows={6}
              className="mb-5"
            />
            <ReactPlaceholder ready={false} type="text" rows={3} />
          </Card.Body>
        </Card>
      </Col>
    </>
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
    <Row>
      <Col md="12">
        <h2>Rockets</h2>
      </Col>

      {rockets.length <= 0 && (
        <>
          <RocketRowPlaceholder />
          <RocketRowPlaceholder />
        </>
      )}

      {rockets.length > 0 &&
        rockets.map((rocket) => (
          <React.Fragment key={rocket.id}>
            <Col
              md="6"
              className="d-flex justify-content-center align-middle"
              style={{
                alignItems: "center",
              }}
            >
              <img
                className="img-fluid rounded shadow"
                alt="Card Bottom"
                src={rocket.flickr_images[0]}
                width="500"
                height="400"
                style={{
                  backgroundImage: `url('${process.env.PUBLIC_URL}/loading-min.webp')`,
                  backgroundColor: "#C4C4C4",
                }}
              />
            </Col>
            <Col md="6" className="mb-4">
              <RocketCard rocket={rocket} fullHeight />
            </Col>
          </React.Fragment>
        ))}
    </Row>
  );
};

export default Rockets;
