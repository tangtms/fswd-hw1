import { Col } from "react-bootstrap";
import React from "react";

const InfoRow = ({ title, value, unit }) => {
  return (
    <>
      <Col md="6">{title}</Col>
      <Col md="6" className="text-right font-weight-bold">
        {value} {unit}
      </Col>
    </>
  );
};

export default InfoRow;
