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
          
       
        <div className="heroSection">
            <div className="heroSectionContent">
                <div className="heroSectionTitle">
                    <h2>Unlimited movies, TV shows & more</h2>
                    
               
                <div className="heroSectionPara">
                    <h5>Watch anywhere. Cancel anytime. Ready to watch? 
                    Enter your email to create or restart your membership.</h5>
                </div>
                </div>
                <div className="heroSectionButton">
                    <button className='HeroBtn'><FaPlay  />Start Watching Now</button>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}
