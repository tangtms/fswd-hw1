import React from "react";

const PageHero = ({ title, subtitle }) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ background: "#EEE", height: "100vh" }}
    >
      <div>
        <h1 className="display-4">{title}</h1>
        <p className="lead">{subtitle}</p>
      </div>
    </div>
  );
};

export default PageHero;
