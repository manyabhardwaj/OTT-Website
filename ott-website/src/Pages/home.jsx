import React from "react";
import "../index.css";
import Navbar from "../Components/navbar.jsx";
import Footer from "../Components/footer.jsx";
import FAQ from "../Components/faq.jsx";
import Movies from "./Movies.jsx";
import Pricing from "./pricing.jsx";
import Cta from "./cta.jsx";
import Features from "../Pages/features.jsx";
import CustomSlider from "../Components/Slider.jsx"; // Renamed Slider
import { FaCirclePlay } from "react-icons/fa6";

function Home() {
  return (
    <>
      <div className="home">
        <Navbar />
        <CustomSlider />
        <div className="hero-section">
          <div className="hero-section-content">
            <div className="hero-section-title">
              <h2>Unlimited movies, TV shows & more</h2>
              <h5 className="text-gray">
                Watch anywhere. Cancel anytime. Ready to watch? <br />
                Enter your email to create or restart your membership.
              </h5>
            </div>
            <button className="primary-btn">
              <FaCirclePlay /> Start Watching Now
            </button>
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

export default Home;
