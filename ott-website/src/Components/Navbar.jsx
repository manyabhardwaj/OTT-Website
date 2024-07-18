import React from 'react'
import "../index.css";
import Logo from "../Images/Logo.png";
import { FaPlay } from "react-icons/fa";

export default function Navbar() {
  return (
    <>
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
        {/* <div className="heroSection">
            <div className="heroSectionContent">
                <div className="heroSectionTitle">
                    <h1>Unlimited movies, TV shows & more</h1>
                    
                </div>
                <div className="heroSectionPara">
                    <p>Watch anywhere. Cancel anytime. Ready to watch? 
                    Enter your email to create or restart your membership.</p>
                </div>
                <div className="heroSectionButton">
                    <button><FaPlay />Start Watching Now</button>
                </div>
            </div>
        </div> */}
    </>
  )
}
