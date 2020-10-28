import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import axios from "../axios";
import "../Row.css";

const baseUrl = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  /*
    - movies represents our initial state
    - setMovies is the method called to 
      update our state.
  */
  const [movies, setMovies] = useState([]);

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

  const opts = {};

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              // isLargeRow: Prop to set top row larger
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              src={`${baseUrl}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
      {/* <YouTube videoId={} opts={} /> */}
    </div>
  );
};

export default Row;
