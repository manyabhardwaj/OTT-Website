import React, { useRef, useState, useEffect } from "react";
import "../index.css";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import Img2 from "../Images/Posters/Movies/Trending/Hanuman.jpg";
import Img3 from "../Images/Posters/Movies/Must Watch/Oppenheimer.jpg";
import Img4 from "../Images/Posters/Movies/Trending/Wakanda.jpeg";
import Img16 from "../Images/Posters/Movies/Genres/Drama/Ruslan.jpg";

// Reusable GenreSection component
function GenreSection({ genreTitle, cards, isGrid }) {
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
      <h3>{genreTitle}</h3>
      <div className="movie-slider-container">
        {showArrows.left && (
          <div className="arrow left-arrow" onClick={scrollLeft}>
            <IoArrowBack />
          </div>
        )}
        <div className="movie-cards" ref={scrollRef}>
          {cards.map((card, index) => (
            <div className={`genre-card ${isGrid ? "grid-card" : "single-image-card"}`} key={index}>
              <div className="genre-content">
                <h5>{card.title}</h5>
                <IoArrowForward />
              </div>
              {isGrid ? (
                <>
                  <div className="grid-image"><img src={card.image} alt={`${card.title} ${index + 1}`} /></div>
                  <div className="grid-image"><img src={card.image} alt={`${card.title} ${index + 1}`} /></div>
                  <div className="grid-image"><img src={card.image} alt={`${card.title} ${index + 1}`} /></div>
                  <div className="grid-image"><img src={card.image} alt={`${card.title} ${index + 1}`} /></div>
                </>
              ) : (
                <img src={card.image} alt={card.title} className="single-cover-image" />
              )}
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
      genreTitle: "Action Movies",
      isGrid: true,
      cards: [
        { title: "Hanuman", image: Img16 },
        { title: "Oppenheimer", image: Img2 },
        { title: "Wakanda", image: Img3 },
        { title: "Ruslan", image: Img4 },
      ],
    },
    {
      genreTitle: "Adventure Movies",
      isGrid: false,
      cards: [
        { title: "Adventure 1", image: Img16 },
        { title: "Adventure 2", image: Img2 },
        { title: "Adventure 3", image: Img3 },
        { title: "Adventure 4", image: Img4 },
      ],
    },
    {
      genreTitle: "Comedy Movies",
      isGrid: false,
      cards: [
        { title: "Comedy 1", image: Img16 },
      ],
    },
    {
      genreTitle: "Drama Movies",
      isGrid: false,
      cards: [
        { title: "Drama 1", image: Img16 },
      ],
    },
    {
      genreTitle: "Fantasy Movies",
      isGrid: false,
      cards: [
        { title: "Fantasy 1", image: Img16 },
        { title: "Fantasy 2", image: Img16 },
        { title: "Fantasy 1", image: Img16 },
        { title: "Fantasy 1", image: Img16 },
        { title: "Fantasy 1", image: Img16 },
        { title: "Fantasy 1", image: Img16 },
        { title: "Fantasy 1", image: Img16 },
        { title: "Fantasy 1", image: Img16 },
      ],
    },
    {
      genreTitle: "Thriller Movies",
      isGrid: false,
      cards: [
        { title: "Thriller 1", image: Img16 },
        { title: "Thriller 2", image: Img16 },
        { title: "Thriller 3", image: Img16 },
        { title: "Thriller 4", image: Img16 },
        { title: "Thriller 5", image: Img16 },
        { title: "Thriller 6", image: Img16 },
        { title: "Thriller 7", image: Img16 },
        { title: "Thriller 8", image: Img16 },
        { title: "Thriller 9", image: Img16 },
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
            cards={section.cards}
            isGrid={section.isGrid}
          />
        ))}
      </div>
    </div>
  );
}
