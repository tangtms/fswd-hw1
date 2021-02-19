import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

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

  return <p>Single Launchasdasdasd {launchId}</p>;
};

export default Launch;
