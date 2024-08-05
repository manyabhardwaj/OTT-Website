import React from "react";
import "../index.css";
import Slider from "react-slick"; // Importing Slider from react-slick
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
import Img16 from "../Images/Posters/Movies/Genres/Drama/Ruslan.jpg";
import Img17 from "../Images/Posters/Movies/Genres/Drama/Srikanth.jpg";
import Img18 from "../Images/Posters/Movies/Genres/Horror/Munjya.jpg";
import Img19 from "../Images/Posters/Movies/Genres/Horror/Shaitan.jpg";
import Img20 from "../Images/Posters/Movies/Genres/Horror/Bhakshak.jpg";
import Img21 from "../Images/Posters/Movies/Trending/Indian.jpg";

// Rename the local component to avoid conflict
function CustomSlider() {
  return (
    <>
      <div className="slider">
        <div className="slide-track">

          {/* 9 slides */}

          <div className="slide">
            <img src={Img1} alt="Slide 1" />
          </div>
          <div className="slide">
            <img src={Img2} alt="Slide 2" />
          </div>
          <div className="slide">
            <img src={Img3} alt="Slide 3" />
          </div>
          <div className="slide">
            <img src={Img4} alt="Slide 4" />
          </div>
          <div className="slide">
            <img src={Img5} alt="Slide 5" />
          </div>
          <div className="slide">
            <img src={Img6} alt="Slide 6" />
          </div>
          <div className="slide">
            <img src={Img1} alt="Slide 1" />
          </div>
          <div className="slide">
            <img src={Img2} alt="Slide 2" />
          </div>
          <div className="slide">
            <img src={Img3} alt="Slide 3" />
          </div>

          {/* double slides */}

          <div className="slide">
            <img src={Img4} alt="Slide 4" />
          </div>
          <div className="slide">
            <img src={Img5} alt="Slide 5" />
          </div>
          <div className="slide">
            <img src={Img4} alt="Slide 4" />
          </div>
          <div className="slide">
            <img src={Img2} alt="Slide 2" />
          </div>
          <div className="slide">
            <img src={Img3} alt="Slide 3" />
          </div>
          <div className="slide">
            <img src={Img1} alt="Slide 1" />
          </div>
          <div className="slide">
            <img src={Img5} alt="Slide 5" />
          </div>
          <div className="slide">
            <img src={Img2} alt="Slide 2" />
          </div>
          <div className="slide">
            <img src={Img4} alt="Slide 4" />
          </div>
        </div>
      </div>
      <div className="slider-2">
        <div className="slide-track">

          {/* 9 slides */}

          <div className="slide">
            <img src={Img1} alt="Slide 1" />
          </div>
          <div className="slide">
            <img src={Img2} alt="Slide 2" />
          </div>
          <div className="slide">
            <img src={Img3} alt="Slide 3" />
          </div>
          <div className="slide">
            <img src={Img4} alt="Slide 4" />
          </div>
          <div className="slide">
            <img src={Img5} alt="Slide 5" />
          </div>
          <div className="slide">
            <img src={Img6} alt="Slide 6" />
          </div>
          <div className="slide">
            <img src={Img1} alt="Slide 1" />
          </div>
          <div className="slide">
            <img src={Img2} alt="Slide 2" />
          </div>
          <div className="slide">
            <img src={Img3} alt="Slide 3" />
          </div>

          {/* double slides */}
          
          <div className="slide">
            <img src={Img4} alt="Slide 4" />
          </div>
          <div className="slide">
            <img src={Img5} alt="Slide 5" />
          </div>
          <div className="slide">
            <img src={Img4} alt="Slide 4" />
          </div>
          <div className="slide">
            <img src={Img2} alt="Slide 2" />
          </div>
          <div className="slide">
            <img src={Img3} alt="Slide 3" />
          </div>
          <div className="slide">
            <img src={Img1} alt="Slide 1" />
          </div>
          <div className="slide">
            <img src={Img5} alt="Slide 5" />
          </div>
          <div className="slide">
            <img src={Img2} alt="Slide 2" />
          </div>
          <div className="slide">
            <img src={Img4} alt="Slide 4" />
          </div>
        </div>
      </div>
      <div className="slider-3">
        <div className="slide-track">

          {/* 9 slides */}

          <div className="slide">
            <img src={Img1} alt="Slide 1" />
          </div>
          <div className="slide">
            <img src={Img2} alt="Slide 2" />
          </div>
          <div className="slide">
            <img src={Img3} alt="Slide 3" />
          </div>
          <div className="slide">
            <img src={Img4} alt="Slide 4" />
          </div>
          <div className="slide">
            <img src={Img5} alt="Slide 5" />
          </div>
          <div className="slide">
            <img src={Img6} alt="Slide 6" />
          </div>
          <div className="slide">
            <img src={Img1} alt="Slide 1" />
          </div>
          <div className="slide">
            <img src={Img2} alt="Slide 2" />
          </div>
          <div className="slide">
            <img src={Img3} alt="Slide 3" />
          </div>

          {/* double slides */}
          
          <div className="slide">
            <img src={Img21} alt="Slide 4" />
          </div>
          <div className="slide">
            <img src={Img9} alt="Slide 5" />
          </div>
          <div className="slide">
            <img src={Img16} alt="Slide 4" />
          </div>
          <div className="slide">
            <img src={Img2} alt="Slide 2" />
          </div>
          <div className="slide">
            <img src={Img3} alt="Slide 3" />
          </div>
          <div className="slide">
            <img src={Img1} alt="Slide 1" />
          </div>
          <div className="slide">
            <img src={Img5} alt="Slide 5" />
          </div>
          <div className="slide">
            <img src={Img2} alt="Slide 2" />
          </div>
          <div className="slide">
            <img src={Img18} alt="Slide 4" />
          </div>
        </div>
      </div>
      <div className="slider-3">
        <div className="slide-track">

          {/* 9 slides */}

          <div className="slide">
            <img src={Img1} alt="Slide 1" />
          </div>
          <div className="slide">
            <img src={Img2} alt="Slide 2" />
          </div>
          <div className="slide">
            <img src={Img3} alt="Slide 3" />
          </div>
          <div className="slide">
            <img src={Img4} alt="Slide 4" />
          </div>
          <div className="slide">
            <img src={Img5} alt="Slide 5" />
          </div>
          <div className="slide">
            <img src={Img6} alt="Slide 6" />
          </div>
          <div className="slide">
            <img src={Img1} alt="Slide 1" />
          </div>
          <div className="slide">
            <img src={Img2} alt="Slide 2" />
          </div>
          <div className="slide">
            <img src={Img3} alt="Slide 3" />
          </div>

          {/* double slides */}
          
          <div className="slide">
            <img src={Img21} alt="Slide 4" />
          </div>
          <div className="slide">
            <img src={Img9} alt="Slide 5" />
          </div>
          <div className="slide">
            <img src={Img16} alt="Slide 4" />
          </div>
          <div className="slide">
            <img src={Img2} alt="Slide 2" />
          </div>
          <div className="slide">
            <img src={Img3} alt="Slide 3" />
          </div>
          <div className="slide">
            <img src={Img1} alt="Slide 1" />
          </div>
          <div className="slide">
            <img src={Img5} alt="Slide 5" />
          </div>
          <div className="slide">
            <img src={Img2} alt="Slide 2" />
          </div>
          <div className="slide">
            <img src={Img18} alt="Slide 4" />
          </div>
        </div>
      </div>
      
      
     
    </>
  );
}
export default CustomSlider;
