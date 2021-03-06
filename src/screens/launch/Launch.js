import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Button, Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import InfoRow from "../../components/InfoRow";

const Launch = () => {
  let { launchId } = useParams();
  const [launch, setLaunch] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://api.spacexdata.com/v3/launches/${launchId}`
      );
      setLaunch(await response.json());
    })();
  }, [launchId]);
  console.log(launch);

  return (
    <div style={{ minHeight: "100vh" }}>
      {launch && (
        <>
          <Row>
            <Col md="6">
              <Link to="/launches/">
                <Button className="mb-4">{"< "} Back</Button>
              </Link>
              <Card>
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
                            variant={
                              launch.launch_success ? "success" : "danger"
                            }
                          >
                            {launch.launch_success ? "Succeed" : "Failed"}
                          </Badge>
                        }
                      />
                      <InfoRow title="Detail" value={launch.details} />
                    </Row>
                  </Card.Text>
                  <Link to={`/rockets/${launch.rocket.rocket_id}`}>
                    <Button variant="primary">View Rocket {">"}</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md="6">
              <img
                src={launch.links.mission_patch}
                className="mt-5 img-fluid"
                alt="Mission Patch"
              />
            </Col>
          </Row>
        </>
      )}
    </div>
  );
};

export default Launch;
