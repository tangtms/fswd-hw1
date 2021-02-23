import React, { useState, useEffect } from "react";
import { Badge, Card, Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import InfoRow from "../../components/InfoRow";
import ReactPlaceholder from "react-placeholder";

const LaunchPlaceholderCard = () => {
  return (
    <Col className="col-sm-12 col-md-6 col-lg-4 my-3">
      <Card>
        <Card.Body>
          <ReactPlaceholder
            ready={false}
            type="rect"
            style={{
              width: "100%",
              height: 300,
            }}
            className="mb-5"
          />
          <ReactPlaceholder ready={false} type="textRow" />
          <hr />
          <ReactPlaceholder ready={false} type="text" rows={4} />
          <ReactPlaceholder
            className="mt-4"
            ready={false}
            type="rect"
            style={{
              height: "2.25em",
              width: "8em",
            }}
          />
        </Card.Body>
      </Card>
    </Col>
  );
};

const LaunchCard = ({ launch }) => {
  return (
    <Col className="col-sm-12 col-md-6 col-lg-4 my-3">
      <Card>
        <img
          className="card-img-top p-4"
          alt="Card Top"
          src={launch.links.mission_patch}
        />
        <Card.Body>
          <Card.Title>{launch.mission_name}</Card.Title>
          <hr />
          <Card.Text>
            <Row>
              <Col md="12" className="font-weight-bold">
                General
              </Col>
              <InfoRow title="Launch Year" value={launch.launch_year} />
              <InfoRow
                title="Launch Site"
                value={launch.launch_site.site_name}
              />
              <InfoRow
                title="Launch Success"
                value={
                  <Badge
                    pill
                    variant={launch.launch_success ? "success" : "danger"}
                  >
                    {launch.launch_success ? "Succeed" : "Failed"}
                  </Badge>
                }
              />
              {/* <InfoRow title="Detail" value={launch.details} /> */}
            </Row>
          </Card.Text>
          <Link to={`/launches/${launch.flight_number}`}>
            <Button variant="primary">More Details {">"}</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

const Launches = () => {
  const [state, setState] = useState([]);
  const [year, setYear] = useState("");
  const [rocketName, setRocketName] = useState("");
  const [launchSuccess, setLaunchSuccess] = useState("");

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://api.spacexdata.com/v3/launches?limit=6&launch_year=" +
          year +
          "&rocket_id=" +
          rocketName +
          "&launch_success=" +
          launchSuccess
      );
      const data = await response.json();
      setState(data);
    })();
  }, [year, rocketName, launchSuccess]);

  return (
    <>
      <h2>Launches</h2>
      <p className="m-0 mb-1 h5">Filter by</p>

      <Row>
        <Col col="12" md="4">
          <Form.Group>
            <Form.Label htmlFor="launch_year">Launch Year</Form.Label>
            <Form.Control
              id="launch_year"
              as="select"
              onChange={(e) => {
                setYear(e.target.value);
              }}
              value={year}
            >
              <option value="" selected disabled hidden>
                Select Year
              </option>

              {[...Array(14).keys()]
                .map((i) => i + 2007)
                .map((year) => (
                  <option value={year}>{year}</option>
                ))}
            </Form.Control>
          </Form.Group>
        </Col>

        <Col col="12" md="4">
          <Form.Group>
            <Form.Label htmlFor="launch_vehicle">Launch Vehicle</Form.Label>
            <Form.Control
              id="launch_vehicle"
              as="select"
              onChange={(e) => {
                setRocketName(e.target.value);
              }}
              value={rocketName}
            >
              <option value="" selected disabled hidden>
                Select Rocket
              </option>

              <option value="falcon1">Falcon 1</option>
              <option value="falcon9">Falcon 9</option>
              <option value="falconheavy">Falcon Heavy</option>
              <option value="starship">Starship</option>
            </Form.Control>
          </Form.Group>
        </Col>

        <Col col="12" md="4">
          <Form.Group>
            <Form.Label htmlFor="launch_outcome">Launch Outcome</Form.Label>
            <Form.Control
              id="launch_outcome"
              as="select"
              onChange={(e) => {
                setLaunchSuccess(e.target.value);
              }}
              value={launchSuccess}
            >
              <option value="" selected disabled hidden>
                Select Launch Success
              </option>

              <option value="true">Success</option>
              <option value="false">Failed</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>

      <hr className="my-0" />

      <Row>
        {state.length <= 0 && (
          <>
            <LaunchPlaceholderCard />
            <LaunchPlaceholderCard />
            <LaunchPlaceholderCard />
            <LaunchPlaceholderCard />
            <LaunchPlaceholderCard />
            <LaunchPlaceholderCard />
          </>
        )}

        {state.map((state) => {
          return <LaunchCard launch={state} />;
        })}
      </Row>
    </>
  );
};

export default Launches;
