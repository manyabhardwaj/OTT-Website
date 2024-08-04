import React, { useRef, useState, useEffect } from "react";
import "../index.css";
import Img2 from "../Images/Posters/Movies/Trending/Hanuman.jpg";
import Img3 from "../Images/Posters/Movies/Must Watch/Oppenheimer.jpg";
import Img4 from "../Images/Posters/Movies/Trending/Wakanda.jpeg";
import Img16 from "../Images/Posters/Movies/Genres/Drama/Ruslan.jpg";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";

// Reusable GenreSection component
function GenreSection({ genreTitle, images }) {
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
      <h3>{genreTitle}</h3>
      <div className="movie-slider-container">
        {showArrows.left && (
          <div className="arrow left-arrow" onClick={scrollLeft}>
            <IoArrowBack />
          </div>
        )}
        <div className="movie-cards" ref={scrollRef}>
          {images.map((image, index) => (
            <div className="genre-card" key={index}>
              <div className="genre-content">
                <h5>{genreTitle}</h5>
                <IoArrowForward />
              </div>
              <img src={image.src} alt={image.alt} />
              <img src={image.src} alt={image.alt} />
              <img src={image.src} alt={image.alt} />
              <img src={image.src} alt={image.alt} />

            </div>
          ))}
        </div>
        {showArrows.right && (
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
      images: [
        { src: Img16, alt: "Action" },
        { src: Img2, alt: "Action" },
        { src: Img3, alt: "Action" },
        { src: Img4, alt: "Action" },
        { src: Img4, alt: "Action" },
        { src: Img4, alt: "Action" },
        { src: Img4, alt: "Action" },
        { src: Img4, alt: "Action" },
        { src: Img4, alt: "Action" },
      ],
    },
    {
      genreTitle: "Adventure",
      images: [
        { src: Img16, alt: "Adventure" },
        { src: Img2, alt: "Adventure" },
        { src: Img3, alt: "Adventure" },
        { src: Img4, alt: "Adventure" },
        { src: Img4, alt: "Action" },
        { src: Img4, alt: "Action" },
        { src: Img4, alt: "Action" },
        { src: Img4, alt: "Action" },
        { src: Img4, alt: "Action" },
      ],
    },
    {
      genreTitle: "Comedy",
      images: [
        { src: Img16, alt: "Comedy" },
        { src: Img2, alt: "Comedy" },
        { src: Img3, alt: "Comedy" },
        { src: Img4, alt: "Comedy" },
        { src: Img4, alt: "Action" },
        { src: Img4, alt: "Action" },
        { src: Img4, alt: "Action" },
        { src: Img4, alt: "Action" },
        { src: Img4, alt: "Action" },
      ],
    },
    {
      genreTitle: "Drama",
      images: [
        { src: Img16, alt: "Drama" },
        { src: Img2, alt: "Drama" },
        { src: Img3, alt: "Drama" },
        { src: Img4, alt: "Drama" },
        { src: Img4, alt: "Action" },
        { src: Img4, alt: "Action" },
        { src: Img4, alt: "Action" },
        { src: Img4, alt: "Action" },

      ],
    },
    {
      genreTitle: "Fantasy",
      images: [
        { src: Img16, alt: "Fantasy" },
        { src: Img2, alt: "Fantasy" },
        { src: Img3, alt: "Fantasy" },
        { src: Img4, alt: "Fantasy" },
        { src: Img4, alt: "Action" },
        { src: Img4, alt: "Action" },
        { src: Img4, alt: "Action" },
      ],
    },
    {
      genreTitle: "Thriller",
      images: [
        { src: Img16, alt: "Thriller" },
        { src: Img2, alt: "Thriller" },
        { src: Img3, alt: "Thriller" },
        { src: Img4, alt: "Thriller" },
        { src: Img4, alt: "Action" },
        { src: Img4, alt: "Action" },
        { src: Img4, alt: "Action" },
      ],
    },
  ];

  return (
    <div className="movies-container">
      <div className="movies-content">
        {genreSections.map((section, index) => (
          <GenreSection
            key={index}
            genreTitle={section.genreTitle}
            images={section.images}
          />
        ))}
      </div>
    </div>
  );
}
