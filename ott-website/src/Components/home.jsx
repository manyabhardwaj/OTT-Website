import React from "react";
import "../index.css";
import Logo from "../Images/Logo.png";
import Navbar from "./navbar.jsx"
import Footer from "./footer.jsx"

function home() {
  return (
    <>
      <div className="home">

        {/* Nav */}

        <Navbar />

        {/* Hero */}
        <div className="heroSection">
          <div className="heroSectionContent">
            <div className="heroSectionTitle">
              <h2>Unlimited movies, TV shows & more</h2>
              <h5>Watch anywhere. Cancel anytime. Ready to watch?
                Enter your email to create or restart your membership.</h5>
            </div>
            <div className="heroSectionButton">
              {/* <button className='HeroBtn'><FaPlay />Start Watching Now</button> */}
            </div>
          </div>
        </div>

        {/* Footer */}

        <Footer />

      </div>


    </>
  );
}

export default home;
