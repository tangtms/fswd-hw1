import React from "react";

const PageHero = ({ title, subtitle }) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ background: "#111", height: "100vh" }}
    >
      <div className="d-none d-md-inline">
        <h1 className="display-4">{title}</h1>
        <p className="lead">{subtitle}</p>
      </div>
      <div className="d-inline d-md-none px-4">
        <h1 className="display-4">{title}</h1>
        <p className="lead">{subtitle}</p>
      </div>
    </div>
  );
};

export default PageHero;
