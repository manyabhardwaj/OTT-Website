import React, { useRef, useState, useEffect } from "react";
import "../index.css";
import Img2 from "../Images/Posters/Movies/Trending/Hanuman.jpg";
import Img3 from "../Images/Posters/Movies/Must Watch/Oppenheimer.jpg";
import Img4 from "../Images/Posters/Movies/Trending/Wakanda.jpeg";
import Img16 from "../Images/Posters/Movies/Genres/Drama/Ruslan.jpg";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";

export default function Movies() {
  const scrollRef = useRef(null);
  const [showArrows, setShowArrows] = useState({ left: false, right: true });

  const updateArrowVisibility = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowArrows({
        left: scrollLeft > 0,
        right: scrollLeft < scrollWidth - clientWidth
      });
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
      updateArrowVisibility();
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
      updateArrowVisibility();
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateArrowVisibility);
      updateArrowVisibility(); // Initial check
      return () => container.removeEventListener("scroll", updateArrowVisibility);
    }
  }, []);

  return (
    <div className="movies-container">
      <div className="movies-content">
        <div className="movie-sub-container">
          <h3>Our Genres</h3>
          <div className="movie-slider-container">
            {showArrows.left && (
              <div className="arrow left-arrow" onClick={scrollLeft}>
                <IoArrowBack />
              </div>
            )}
            <div className="movie-cards" ref={scrollRef}>
              <div className="genre-card">
                <div className="genre-content">
                  <h5>Action</h5>
                  <IoArrowForward />
                </div>
                <img src={Img16} alt="Action" />
                <img src={Img2} alt="Action" />
                <img src={Img3} alt="Action" />
                <img src={Img4} alt="Action" />
              </div>
              <div className="genre-card">
                <div className="genre-content">
                  <h5>Adventure</h5>
                  <IoArrowForward />
                </div>
                <img src={Img16} alt="Adventure" />
                <img src={Img2} alt="Adventure" />
                <img src={Img3} alt="Adventure" />
                <img src={Img4} alt="Adventure" />
              </div>
              <div className="genre-card">
                <div className="genre-content">
                  <h5>Comedy</h5>
                  <IoArrowForward />
                </div>
                <img src={Img16} alt="Comedy" />
                <img src={Img2} alt="Comedy" />
                <img src={Img3} alt="Comedy" />
                <img src={Img4} alt="Comedy" />
              </div>
              <div className="genre-card">
                <div className="genre-content">
                  <h5>Drama</h5>
                  <IoArrowForward />
                </div>
                <img src={Img16} alt="Drama" />
                <img src={Img2} alt="Drama" />
                <img src={Img3} alt="Drama" />
                <img src={Img4} alt="Drama" />
              </div>
              <div className="genre-card">
                <div className="genre-content">
                  <h5>Comedy</h5>
                  <IoArrowForward />
                </div>
                <img src={Img16} alt="Comedy" />
                <img src={Img2} alt="Comedy" />
                <img src={Img3} alt="Comedy" />
                <img src={Img4} alt="Comedy" />
              </div>
              <div className="genre-card">
                <div className="genre-content">
                  <h5>Comedy</h5>
                  <IoArrowForward />
                </div>
                <img src={Img16} alt="Comedy" />
                <img src={Img2} alt="Comedy" />
                <img src={Img3} alt="Comedy" />
                <img src={Img4} alt="Comedy" />
              </div>
              <div className="genre-card">
                <div className="genre-content">
                  <h5>Comedy</h5>
                  <IoArrowForward />
                </div>
                <img src={Img16} alt="Comedy" />
                <img src={Img2} alt="Comedy" />
                <img src={Img3} alt="Comedy" />
                <img src={Img4} alt="Comedy" />
              </div>
            </div>
            {showArrows.right && (
              <div className="arrow right-arrow" onClick={scrollRight}>
                <IoArrowForward />
              </div>
            )}
          </div>
        </div>
      </div>
      
    </div>
  );
}
