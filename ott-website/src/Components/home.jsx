import React from "react";
import "../index.css";
import Logo from "../Images/Logo.png";

function home() {
  return (
    <>
      <div className="home">

        {/* Nav */}

        <div className="navbar">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="nav-menu">
            <a className="active" href="#">
              Home
            </a>
            <a href="#">Movies & Shows</a>
            <a href="#">Subscription</a>
            <a href="#">Support</a>
          </div>
          <button className="primary-btn">Sign In</button>
        </div>

        {/* Hero Section */}

        <div className="container">

        </div>

      </div>
    </>
  );
}

export default home;
