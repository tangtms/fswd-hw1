import React from "react";
import { useParams } from "react-router-dom";

const Launch = () => {
  let { launchId } = useParams();

  return <p>Single Launch {launchId}</p>;
};

export default Launch;
