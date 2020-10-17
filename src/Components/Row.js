import React, { useEffect, useState } from "react";
import axios from "../axios";
import "../Row.css";

const baseUrl = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl }) => {
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

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {/* row-posters */}
        {movies.map((movie, index) => {
          // console.log(`Movie: ${movie}`);
          return (
            <img
              className="row_poster"
              src={`${baseUrl}${movie.poster_path}`}
              alt={movie.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Row;
