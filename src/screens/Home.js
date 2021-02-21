import React from "react";

const Home = () => {
  return (
    <>
      <video
        style={{ objectFit: "cover" }}
        autoPlay
        loop={true}
        muted=""
        width="100%"
        height="100%"
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
      <div
        className="v-center text-white"
        style={{
          marginLeft: "20em",
          marginRight: "20em",
        }}
      >
        <h1>SpaceX</h1>
        <hr className="bg-white" />
        <h4>
          Aerospace manufacturer and space transportation services company
          headquartered in Hawthorne, California. Founded in 2002 by Elon Musk
          with the goal of reducing space transportation costs to enable the
          colonization of Mars.
        </h4>
      </div>
    </>
  );
};

export default Home;
