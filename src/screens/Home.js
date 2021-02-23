import React from "react";

const Home = () => {
  return (
    <>
      <video
        style={{
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          display: "block",
          width: "100%",
          height: "100%",
          zIndex: -100,
        }}
        autoPlay
        loop={true}
        muted
        preload="auto"
        autobuffer="true"
        data-mobile-video=""
      >
        <source
          type="video/mp4"
          src="https://www.spacex.com/media/SN8_Website_03.mp4"
        />
        <source
          type="video/webm"
          src="https://www.spacex.com/media/SN8_Website_03.webm"
        />
      </video>

      <div className="d-none d-lg-inline">
        <div
          className="text-white"
          style={{
            marginTop: "22em",
            marginLeft: "22em",
            marginRight: "22em",
          }}
        >
          <h1 className="display-3 font-weight-bold">SpaceX</h1>
          <p className="lead">
            Aerospace manufacturer and space transportation services company
            headquartered in Hawthorne, California. Founded in 2002 by Elon Musk
            with the goal of reducing space transportation costs to enable the
            colonization of Mars.
          </p>
        </div>
      </div>

      <div className="d-lg-none d-inline">
        <div
          className="text-white"
          style={{
            position: "absolute",
            bottom: 0,
            marginBottom: "2em",
            marginLeft: "2em",
            marginRight: "2em",
          }}
        >
          <h1 className="display-3 font-weight-bold">SpaceX</h1>
          <p className="lead">
            Aerospace manufacturer and space transportation services company
            headquartered in Hawthorne, California. Founded in 2002 by Elon Musk
            with the goal of reducing space transportation costs to enable the
            colonization of Mars.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
