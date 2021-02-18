import React from "react";
import { useParams } from "react-router-dom";

const Rocket = () => {
  let { rocketId } = useParams();

  return <p>Single Rocket {rocketId}</p>;
};

export default Rocket;
