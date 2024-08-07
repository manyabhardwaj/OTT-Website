import React, { useRef, useState, useEffect } from "react";
import "../index.css";
import { IoArrowForward, IoArrowBack, IoTimeOutline, IoEyeOutline } from "react-icons/io5";
import { AiFillStar } from "react-icons/ai"; 
import Img22 from "../Images/Posters/Movies/Trending/Hanuman.jpg";
import Img23 from "../Images/Posters/Movies/Must Watch/Oppenheimer.jpg";
import Img24 from "../Images/Posters/Movies/Trending/Wakanda.jpeg";
import Img25 from "../Images/Posters/Movies/Genres/Drama/Ruslan.jpg";
import Img1 from "../Images/Posters/Movies/Must Watch/Barbie.jpg";
import Img2 from "../Images/Posters/Movies/Trending/Hanuman.jpg";
import Img3 from "../Images/Posters/Movies/Must Watch/Oppenheimer.jpg";
import Img4 from "../Images/Posters/Movies/Trending/Wakanda.jpeg";
import Img5 from "../Images/Posters/Movies/Genres/Action/Eagle.jpg";
import Img6 from "../Images/Posters/Movies/Genres/Comedy/Crew.jpg";
import Img7 from "../Images/Posters/Movies/Genres/Comedy/Avesham.jpg";
import Img8 from "../Images/Posters/Movies/Genres/Comedy/Madgaon.jpg";
import Img9 from "../Images/Posters/Movies/Genres/Comedy/Murder.jpg";
import Img10 from "../Images/Posters/Movies/Genres/Action/Fighter.jpg";
import Img11 from "../Images/Posters/Movies/Genres/Action/Yodha.jpg";
import Img12 from "../Images/Posters/Movies/Genres/Adventure/Dune.jpg";
import Img13 from "../Images/Posters/Movies/Genres/Adventure/Kraven.jpg";
import Img14 from "../Images/Posters/Movies/Genres/Adventure/Aquaman.jpeg";
import Img15 from "../Images/Posters/Movies/Genres/Drama/Ruslan.jpg";

import Img17 from "../Images/Posters/Movies/Genres/Drama/Srikanth.jpg";
import Img18 from "../Images/Posters/Movies/Genres/Horror/Munjya.jpg";
import Img19 from "../Images/Posters/Movies/Genres/Horror/Shaitan.jpg";
import Img20 from "../Images/Posters/Movies/Genres/Horror/Bhakshak.jpg";
import Img21 from "../Images/Posters/Movies/Trending/Indian.jpg";

// Reusable GenreSection component
function GenreSection({ genreTitle, images, isGrid }) {
  const scrollRef = useRef(null);
  const [showArrows, setShowArrows] = useState({ left: false, right: true });

  const updateArrowVisibility = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowArrows({
        left: scrollLeft > 0,
        right: scrollLeft < scrollWidth - clientWidth,
      });
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
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
    <div className="movie-sub-container">
      <h4>{genreTitle}</h4>
      <div className={`movie-slider-container ${genreTitle.toLowerCase()}`}>
        {showArrows.left && (
          <div className="arrow left-arrow" onClick={scrollLeft}>
            <IoArrowBack />
          </div>
        )}
        <div className="movie-cards" ref={scrollRef}>
          {images.map((image, index) => (
            <div
              className={`genre-card ${isGrid ? "grid-card" : "single-image-card"} ${
                genreTitle === "Thriller" ? "thriller-card" : ""
              } ${genreTitle === "Fantasy" ? "fantasy-card" : ""}`}
              key={index}
            >
              {isGrid ? (
                <>
                  {image.src.slice(0, 4).map((src, i) => (
                    <div className="grid-image" key={i}>
                      <img src={src} alt={image.title || `${genreTitle} ${i + 1}`} />
                      {/* Title and Fixed Arrow for grid layout */}
                      <div className="card-title-and-arrow">
                        <h5 className="card-title">{image.title}</h5>
                        <IoArrowForward className="fixed-arrow" />
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <>
                  <img
                    src={image.src}
                    alt={image.title || image.alt}
                    className={`single-cover-image ${
                      genreTitle === "Thriller" ? "thriller-image" : ""
                    } ${genreTitle === "Fantasy" ? "fantasy-image" : ""}`}
                  />

                  {/* Title and Fixed Arrow for other genres */}
                  {genreTitle !== "Thriller" && genreTitle !== "Fantasy" && (
                    <div className="card-title-and-arrow">
                      <h5 className="card-title">{image.title}</h5>
                      <IoArrowForward className="fixed-arrow" />
                    </div>
                  )}

                  {/* Thriller Cards */}
                  {genreTitle === "Thriller" && (
                    <div className="thriller-details">
                      <div className="thriller-time">
                        <IoTimeOutline size={30} className="thriller-icon" />
                        <span className="TimeDuration">1h 30min</span>
                      </div>
                      <div className="thriller-views">
                        <IoEyeOutline size={30} className="thriller-icon" />
                        <span className="TextRating">2K</span>
                      </div>
                    </div>
                  )}

                  {/* Fantasy Cards */}
                  {genreTitle === "Fantasy" && (
                    <div className="fantasy-details">
                      <div className="fantasy-time">
                        <IoTimeOutline size={30} className="fantasy-icon" />
                        <span className="TimeDuration">1h 57min</span>
                      </div>
                      <div className="fantasy-rating">
                        <AiFillStar className="fantasy-star" />
                        <AiFillStar className="fantasy-star" />
                        <AiFillStar className="fantasy-star" />
                        <AiFillStar className="fantasy-star" />
                        <AiFillStar className="fantasy-star half" />
                        <span className="TextRating">20K</span>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
        {showArrows.right && genreTitle !== "Thriller" && genreTitle !== "Fantasy" && (
          <div className="arrow right-arrow" onClick={scrollRight}>
            <IoArrowForward />
          </div>
        )}
      </div>
    </div>
  );
}

// Main Movies component
export default function Movies() {
  const genreSections = [
    {
      genreTitle: "Action",
      isGrid: true,
      images: [
        { src: [Img22, Img23, Img24, Img1], title: "Action Movie 1" },
        { src: [Img8, Img15, Img5, Img18], title: "Action Movie 2" },
        { src: [Img10, Img11, Img12, Img13], title: "Action Movie 3" },
        { src: [Img14, Img15, Img12, Img1], title: "Action Movie 4" },
      ],
    },
    
    {
      genreTitle: "Thriller",
      isGrid: false,
      images: [
        { src: Img22, title: "Thriller Movie 1" },
        { src: Img23, title: "Thriller Movie 2" },
        { src: Img24, title: "Thriller Movie 3" },
        { src: Img1, title: "Thriller Movie 4" },
      ],
    },
    {
      genreTitle: "Fantasy",
      isGrid: false,
      images: [
        { src: Img22, title: "Fantasy Movie 1" },
        { src: Img23, title: "Fantasy Movie 2" },
        { src: Img24, title: "Fantasy Movie 3" },
        { src: Img12, title: "Fantasy Movie 4" },
      ],
    },
    {
      genreTitle: "Adventure",
      isGrid: true,
      images: [
        { src: [Img11, Img13, Img10, Img9], title: "Adventure Movie 1" },
        { src: [Img7, Img6, Img5, Img15], title: "Adventure Movie 2" },
        { src: [Img14, Img13, Img12, Img11], title: "Adventure Movie 3" },
        { src: [Img10, Img9, Img8, Img7], title: "Adventure Movie 4" },
      ],
    },
    {
      genreTitle: "Thriller",
      isGrid: false,
      images: [
        { src: Img22, title: "Thriller Movie 1" },
        { src: Img23, title: "Thriller Movie 2" },
        { src: Img24, title: "Thriller Movie 3" },
        { src: Img1, title: "Thriller Movie 4" },
      ],
    },
    {
      genreTitle: "Fantasy",
      isGrid: false,
      images: [
        { src: Img22, title: "Fantasy Movie 1" },
        { src: Img23, title: "Fantasy Movie 2" },
        { src: Img24, title: "Fantasy Movie 3" },
        { src: Img1, title: "Fantasy Movie 4" },
      ],
    },
    
  ];

  return (
    <div className="movie-container">
      {genreSections.map((section, index) => (
        <GenreSection
          key={index}
          genreTitle={section.genreTitle}
          images={section.images}
          isGrid={section.isGrid}
        />
      ))}
    </div>
  );
}
