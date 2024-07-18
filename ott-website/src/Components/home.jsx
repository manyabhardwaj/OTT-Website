import React from "react";
import Movies from '../Components/Movies' ;
import Navbar from "../Components/Navbar";

import Slider from "../Components/Slider";

function home() {
  return (
    <>
      <div className="mainContainer">
       
        <Slider />
        <Navbar />

      
      </div>
      <Movies/>
    
   
      
    </>
  );
}

export default home;
