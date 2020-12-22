import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import axios from "../axios";
import "../Row.css";
import movieTrailer from "movie-trailer";
import { ReactComponent as MovieIcon } from "../assets/movie_filter-24px.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation]);

const baseUrl = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  /*
    - movies represents our initial state
    - setMovies is the method called to 
      update our state.
  */
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  // A snippet of code which runs based on a specific condition/variable
  useEffect(() => {
    (async () => {
      const request = await axios.get(fetchUrl);
      if (request != null) {
        setMovies(request.data.results);
      }
      return request;
    })();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      //  https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <Swiper
        style={{
          display: "flex",
          paddingTop: "20px",
          paddingBottom: "20px",
          zIndex: "0",
        }}
        breakpoints={{
          375: {
            width: 375,
            slidesPerView: 2,
          },
        }}
        slidesPerView="auto"
        loopedSlides={movies.length}
        // loopFillGroupWithBlank={false}
        loop={true}
        navigation
      >
        {movies.map((movie, index) => {
          console.log(movie);
          if (movie.backdrop_path != null || undefined) {
            return (
              <SwiperSlide key={movie.id}>
                <img
                  onClick={() => handleClick(movie)}
                  // key={movie.id}
                  // isLargeRow: Prop to set top row larger
                  className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                  src={`${baseUrl}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.name}
                />
              </SwiperSlide>
            );
          } else {
            return (
              <SwiperSlide key={index}>
                <div
                  className="row_poster"
                  key={movie.id}
                  onClick={() => handleClick(movie)}
                >
                  <MovieIcon className="row_poster__alt-item--icon"></MovieIcon>
                  <div className="row_poster__alt-item--text">
                    {movie.title}
                  </div>
                </div>
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
