import React, { useMemo, useCallback } from "react";
import { Badge, Card, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const InfoRow = ({ title, value, unit }) => {
  return (
    <>
      <Col md="8" className="text-muted">
        {title}
      </Col>
      <Col md="4" className="text-right font-weight-bold">
        {value} {unit}
      </Col>
    </>
  );
};

const RocketCard = ({ rocket, hideButton = false, fullHeight = false }) => {
  const randImg = useMemo(() => {
    if (rocket.flickr_images) {
      return rocket.flickr_images[
        Math.floor(Math.random() * rocket.flickr_images.length)
      ];
    }
    return "";
  }, [rocket.flickr_images]);

  const commaNumber = useCallback((inputNumber) => {
    return inputNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }, []);

  return (
    <Card className={fullHeight ? "h-100" : ""}>
      <LazyLoadImage
        class="card-img-top"
        alt="Card Top"
        src={randImg}
        width="500"
        height="400"
        placeholderSrc={`${process.env.PUBLIC_URL}/loading.png`}
      />

      <Card.Body>
        <Row>
          <Col>
            <Card.Title>{rocket.rocket_name}</Card.Title>
          </Col>
          <Col className="text-right">
            <Card.Subtitle className="text-muted">
              <Badge pill variant={rocket.active ? "success" : "danger"}>
                {rocket.active ? "Active" : "Inactive"}
              </Badge>
            </Card.Subtitle>
          </Col>
        </Row>

        <Card.Text>{rocket.description}</Card.Text>
        <hr />

        <Row>
          <Col md="12" className="font-weight-bold">
            General
          </Col>

          <InfoRow title="First Flight" value={rocket.first_flight} />
          <InfoRow
            title="Success Rate"
            value={rocket.success_rate_pct}
            unit="%"
          />
          <InfoRow
            title="Cost per launch"
            value={commaNumber(rocket.cost_per_launch)}
            unit="USD"
          />
          <InfoRow title="Height" value={rocket.height.meters} unit="m" />
          <InfoRow title="Diameter" value={rocket.diameter.meters} unit="m" />

          <Col md="12" className="mt-2 font-weight-bold">
            Payload Weights
          </Col>
          {rocket.payload_weights.map((payload) => (
            <InfoRow
              key={payload.id}
              title={`- ${payload.name}`}
              value={payload.kg}
              unit="kg"
            />
          ))}

          {!hideButton && (
            <Col md="12">
              <hr />
              <Link to={`/rockets/${rocket.rocket_id}`}>
                <Button variant="primary">More Details {">"}</Button>
              </Link>
            </Col>
          )}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default RocketCard;
