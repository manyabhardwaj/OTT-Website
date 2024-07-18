import React from "react";

import Navbar from "../Components/Navbar";

import Slider from "../Components/Slider";

function home() {
  return (
    <>
      <div className="mainContainer">
        <Slider />
        <Navbar />
      </div>
    </>
  );
}

export default home;
