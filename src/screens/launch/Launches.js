import React, { useState, useEffect } from "react";
import { Badge, Card, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const InfoRow = ({ title, value, unit }) => {
  return (
    <>
      <Col md="6" className="text-muted">
        {title}
      </Col>
      <Col md="6" className="text-right font-weight-bold">
        {value} {unit}
      </Col>
    </>
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
      console.log(data);
      setState(data);
    })();
  }, [year, rocketName, launchSuccess]);

  // const filterYear = (e) => {
  //   setYear(e.target.value);
  // };
  console.log(year);
  const launchItems = state.map((state) => {
    // const launchDate = new Date(state.launch_date_unix * 1000);
    return (
      <Col className="col-sm-12 col-md-6 col-lg-4 my-3">
        <Card>
          <Card.Img
            variant="top"
            src={state.links.mission_patch}
            className="p-4"
          />
          <Card.Body>
            <Card.Title>{state.mission_name}</Card.Title>
            <hr />
            <Card.Text>
              <Row>
                <Col md="12" className="font-weight-bold">
                  General
                </Col>
                <InfoRow title="Launch Year" value={state.launch_year} />
                <InfoRow
                  title="Launch Site"
                  value={state.launch_site.site_name}
                />
                <InfoRow
                  title="Launch Success"
                  value={
                    <Badge
                      pill
                      variant={state.launch_success ? "success" : "danger"}
                    >
                      {state.launch_success ? "Succeed" : "Failed"}
                    </Badge>
                  }
                />
                {/* <InfoRow title="Detail" value={state.details} /> */}
              </Row>
            </Card.Text>
            <Link to={`/launches/${state.flight_number}`}>
              <Button variant="primary">More Details {">"}</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    );
  });
  return (
    <>
      <h1>Launches</h1>
      <p>Filter by</p>
      <select
        className="mr-2"
        onChange={(e) => {
          setYear(e.target.value);
        }}
        value={year}
      >
        <option value="" selected disabled hidden>
          Select Year
        </option>
        <option value="2007">2007</option>
        <option value="2008">2008</option>
        <option value="2009">2009</option>
        <option value="2010">2010</option>
      </select>
      <select
        className="mr-2"
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
      </select>
      <select
        className="mr-2"
        onChange={(e) => {
          setLaunchSuccess(e.target.value);
        }}
        value={launchSuccess}
      >
        <option value="" selected disabled hidden>
          Select Launch Success
        </option>

        <option value="true">True</option>
        <option value="false">False</option>
      </select>
      <Row>{launchItems}</Row>
    </>
  );
};

export default Launches;
