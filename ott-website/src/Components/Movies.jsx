import React, { useRef, useState, useEffect } from "react";
import "../index.css";
import { IoArrowForward, IoArrowBack, IoTimeOutline, IoEyeOutline } from "react-icons/io5";
import { AiFillStar } from "react-icons/ai"; 
import Img2 from "../Images/Posters/Movies/Trending/Hanuman.jpg";
import Img3 from "../Images/Posters/Movies/Must Watch/Oppenheimer.jpg";
import Img4 from "../Images/Posters/Movies/Trending/Wakanda.jpeg";
import Img16 from "../Images/Posters/Movies/Genres/Drama/Ruslan.jpg";

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
                  <div className="grid-image">
                    <img src={image.src} alt={image.title || `${genreTitle} ${index + 1}`} />
                    {/* Title and Fixed Arrow for grid layout */}
                    <div className="card-title-and-arrow">
                      <h5 className="card-title">{image.title}</h5>
                      <IoArrowForward className="fixed-arrow" />
                    </div>
                  </div>
                  <div className="grid-image">
                    <img src={image.src} alt={image.title || `${genreTitle} ${index + 1}`} />
                    {/* Title and Fixed Arrow for grid layout */}
                    <div className="card-title-and-arrow">
                      <h5 className="card-title">{image.title}</h5>
                      <IoArrowForward className="fixed-arrow" />
                    </div>
                  </div>
                  <div className="grid-image">
                    <img src={image.src} alt={image.title || `${genreTitle} ${index + 1}`} />
                    {/* Title and Fixed Arrow for grid layout */}
                    <div className="card-title-and-arrow">
                      <h5 className="card-title">{image.title}</h5>
                      <IoArrowForward className="fixed-arrow" />
                    </div>
                  </div>
                  <div className="grid-image">
                    <img src={image.src} alt={image.title || `${genreTitle} ${index + 1}`} />
                    {/* Title and Fixed Arrow for grid layout */}
                    <div className="card-title-and-arrow">
                      <h5 className="card-title">{image.title}</h5>
                      <IoArrowForward className="fixed-arrow" />
                    </div>
                  </div>
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
                        <AiFillStar  className="fantasy-star" />
                        <AiFillStar className="fantasy-star" />
                        <AiFillStar  className="fantasy-star" />
                        <AiFillStar  className="fantasy-star half" />
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
        { src: Img16, title: "Action Movie 1" },
        { src: Img2, title: "Action Movie 2" },
        { src: Img3, title: "Action Movie 3" },
        { src: Img4, title: "Action Movie 4" },
        { src: Img4, title: "Action Movie 5" },
        { src: Img4, title: "Action Movie 6" },
        { src: Img4, title: "Action Movie 7" },
        { src: Img4, title: "Action Movie 8" },
      ],
    },
    {
      genreTitle: "Adventure",
      isGrid: true,
      images: [
        { src: Img16, title: "Adventure Movie 1" },
        { src: Img2, title: "Adventure Movie 2" },
        { src: Img3, title: "Adventure Movie 3" },
        { src: Img4, title: "Adventure Movie 4" },
        { src: Img3, title: "Adventure Movie 5" },
        { src: Img3, title: "Adventure Movie 6" },
        { src: Img3, title: "Adventure Movie 7" },
        { src: Img3, title: "Adventure Movie 8" },
        { src: Img3, title: "Adventure Movie 9" },
      ],
    },
    {
      genreTitle: "Comedy",
      isGrid: false,
      images: [
        { src: Img16, title: "Comedy Movie 1" },
        { src: Img16, title: "Comedy Movie 2" },
        { src: Img16, title: "Comedy Movie 3" },
        { src: Img16, title: "Comedy Movie 4" },
        { src: Img16, title: "Comedy Movie 5" },
        { src: Img16, title: "Comedy Movie 6" },
        { src: Img16, title: "Comedy Movie 7" },
      ],
    },
    {
      genreTitle: "Drama",
      isGrid: false,
      images: [
        { src: Img2, title: "Drama Movie 1" },
        { src: Img4, title: "Drama Movie 2" },
        { src: Img3, title: "Drama Movie 3" },
        { src: Img4, title: "Drama Movie 4" },
        { src: Img4, title: "Drama Movie 5" },
        { src: Img4, title: "Drama Movie 6" },
        { src: Img4, title: "Drama Movie 7" },
        { src: Img4, title: "Drama Movie 8" },
      ],
    },
    {
      genreTitle: "Fantasy",
      isGrid: false,
      images: [
        { src: Img16, title: "Fantasy Movie 1" },
        { src: Img2, title: "Fantasy Movie 2" },
        { src: Img4, title: "Fantasy Movie 3" },
        { src: Img4, title: "Fantasy Movie 4" },
        { src: Img3, title: "Fantasy Movie 5" },
        { src: Img4, title: "Fantasy Movie 6" },
        { src: Img16, title: "Fantasy Movie 7" },
        { src: Img16, title: "Fantasy Movie 8" },
      ],
    },
    {
      genreTitle: "Thriller",
      isGrid: false,
      images: [
        { src: Img16, title: "Thriller Movie 1" },
        { src: Img16, title: "Thriller Movie 2" },
        { src: Img16, title: "Thriller Movie 3" },
        { src: Img16, title: "Thriller Movie 4" },
        { src: Img16, title: "Thriller Movie 5" },
        { src: Img16, title: "Thriller Movie 6" },
      ],
    },
  ];

  return (
    <div className="main-movies-container">
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
