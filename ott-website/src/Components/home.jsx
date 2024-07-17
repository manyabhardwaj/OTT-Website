import React from "react";
import "../index.css";
import Logo from "../Images/Logo.png";
import Img from "../Images/Posters/Movies/Must Watch/Barbie.jpg";

function home() {
  return (
    <>
      <div className="mainContainer">
        <div className="navbar">
          <div className="navElement">
            <div className="navLogo">
              <img src={Logo} alt="Logo" />
            </div>
          </div>
          <div className="navItem">
            <a className="active" href="#">
              Home
            </a>
            <a href="#">Movies & Shows</a>
            <a href="#">Subscription</a>
            <a href="#">Support</a>
          </div>
          <div className="NavButton">
            <button>Sign In</button>
          </div>
        </div>
        
      
      </div>
    </>
  );
}

export default home;
