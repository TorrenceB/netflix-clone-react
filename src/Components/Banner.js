import React, { useEffect, useState } from "react";
import "../Banner.css";
import axios from "../axios";
import requests from "../requests";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    // async function fetchData() {}
    (async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    })();
    // console.log(`Movie: ${movie}`);
  }, []);

  const truncate = (str, number) => {
    return str?.length > number ? str.substr(0, number - 1) + "..." : str;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        {/* Some Api's don't always give you all the information
          that you need, therefore it's really important 
          to find the edge cases and implement them. */}
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
};

export default Banner;
