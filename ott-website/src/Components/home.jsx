import React from "react";
import "../index.css";
import Navbar from "./navbar.jsx"
import Footer from "./footer.jsx"
import FAQ from "./faq.jsx"
import Movies from "./Movies.jsx"
import Pricing from "./pricing.jsx"
import Cta from "./cta.jsx"
import Features from "./features.jsx"
import Slider from "./Slider.jsx"
import { FaCirclePlay } from "react-icons/fa6";

function home() {
  return (
    <>

      <div className="home">
      <Slider/>
        <Navbar />
   

        {/* Hero */}
        <div className="hero-section">
          <div className="hero-section-content">
            <div className="hero-section-title">
              <h2>Unlimited movies, TV shows & more</h2>
              <h5 className="text-gray">Watch anywhere. Cancel anytime. Ready to watch? <br />
                Enter your email to create or restart your membership.</h5>
            </div>
            <button className='primary-btn'><FaCirclePlay />Start Watching Now</button>
          </div>
        </div>


        <Movies />

        <Features />

        <Pricing />

        <FAQ />

        <Cta />

        <Footer />
       

      </div>


    </>
  );
}

export default home;
