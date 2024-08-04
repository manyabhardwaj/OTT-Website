import React from "react";
// import Slider from "react-slick";
import "../index.css";
import Img2 from "../Images/Posters/Movies/Trending/Hanuman.jpg";
import Img3 from "../Images/Posters/Movies/Must Watch/Oppenheimer.jpg";
import Img4 from "../Images/Posters/Movies/Trending/Wakanda.jpeg";
import Img16 from "../Images/Posters/Movies/Genres/Drama/Ruslan.jpg";


import { IoArrowForward } from "react-icons/io5";

export default function Movies() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="movies-container">
        <div className="movies-content">

          <div className="movie-sub-container">
            <h3>Our Genres</h3>

            {/* <Slider {...settings}>
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
            </Slider> */}

            <div className="movie-cards">

              <div className="genre-card">
                <div className="genre-content">
                  <h5>Action</h5>
                  <IoArrowForward />
                </div>
                <img src={Img16} />
                <img src={Img2} />
                <img src={Img3} />
                <img src={Img4} />
              </div>

              <div className="genre-card">
                <div className="genre-content">
                  <h5>Adventure</h5>
                  <IoArrowForward />
                </div>
                <img src={Img16} />
                <img src={Img2} />
                <img src={Img3} />
                <img src={Img4} />
              </div>

              <div className="genre-card">
                <div className="genre-content">
                  <h5>Comedy</h5>
                  <IoArrowForward />
                </div>
                <img src={Img16} />
                <img src={Img2} />
                <img src={Img3} />
                <img src={Img4} />
              </div>

              <div className="genre-card">
                <div className="genre-content">
                  <h5>Drama</h5>
                  <IoArrowForward />
                </div>
                <img src={Img16} />
                <img src={Img2} />
                <img src={Img3} />
                <img src={Img4} />
              </div>

              <div className="genre-card">
                <div className="genre-content">
                  <h5>Action</h5>
                  <IoArrowForward />
                </div>
                <img src={Img16} />
                <img src={Img2} />
                <img src={Img3} />
                <img src={Img4} />
              </div>

              <div className="genre-card">
                <div className="genre-content">
                  <h5>Action</h5>
                  <IoArrowForward />
                </div>
                <img src={Img16} />
                <img src={Img2} />
                <img src={Img3} />
                <img src={Img4} />
              </div>

              <div className="genre-card">
                <div className="genre-content">
                  <h5>Action</h5>
                  <IoArrowForward />
                </div>
                <img src={Img16} />
                <img src={Img2} />
                <img src={Img3} />
                <img src={Img4} />
              </div>

            </div>
          </div>
        </div>

      </div>
    </>
  );
}
