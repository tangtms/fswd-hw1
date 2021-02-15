import React from "react";

const Home = () => {
  return (
    <video
      styles={{ objectFit: "cover" }}
      autoplay=""
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
  );
};

export default Home;
