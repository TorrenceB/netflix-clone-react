import React, { useEffect, useState } from "react";
import axios from "../axios";

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  // A snippet of code which runs based on a specific condition/variable
  useEffect(() => {
    // if [], run once when the row loads and do not run again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();

    // (async () => {
    //   const request = await axios.get(fetchUrl);
    //   console.log(`Request: ${request.data}`);
    //     if (request != null) {
    //   setMovies(request.data.results);
    //     }
    //   return request;
    // })();
  }, [fetchUrl]);

  console.log(`Movies: ${movies}`);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {/* row-posters */}
        {movies.map((movie) => {
          console.log(`Movie: ${movie}`);
          // <img src={movie.poster_path} alt={movie.name}/>
        })}
      </div>
    </div>
  );
};

export default Row;
