import React from "react";
import "../index.css";
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

export default function Movies() {
  return (
    <>
      <div className="moviesContainer">
        <div className="moviesContent">
          <div className="movieGenre">
            <h2>Movies</h2>
          </div>
          <div className="movieGenreContainer">
            <h3>Our Genres</h3>
            <div className="GenreBoxes">
            <div className="genre">

              <div className="genreCard">
              <h5 className="cardHeading">Family</h5>
                <img src={Img16} />
                <img src={Img2} />
                <img src={Img3} />
                <img src={Img4} />
              </div>
              
            </div>
            <div className="genre">

              <div className="genreCard">
              <h5 className="cardHeading">Family</h5>
                <img src={Img5} />
                <img src={Img6} />
                <img src={Img7} />
                <img src={Img8} />
              </div>
              
            </div>
            <div className="genre">

              <div className="genreCard">
              <h5 className="cardHeading">Family</h5>
                <img src={Img9} />
                <img src={Img10} />
                <img src={Img11} />
                <img src={Img12} />
              </div>
              
            </div>
            <div className="genre">

              <div className="genreCard">
              <h5 className="cardHeading">Family</h5>
                <img src={Img13} />
                <img src={Img14} />
                <img src={Img15} />
                <img src={Img17} />
              </div>
              
            </div>
            <div className="genre">
            
              <div className="genreCard">
              <h5 className="cardHeading">Family</h5>
                <img src={Img18} />
                <img src={Img19} />
                <img src={Img20} />
                <img src={Img21} />
              </div>
              
            </div>
            
            
            
          </div>
          </div>
        </div>
        
      </div>
    </>
  );
}
