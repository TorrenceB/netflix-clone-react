import React, { useEffect, useState } from "react";
import axios from "src/axios.js";

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  // A snippet of code which runs based on a specific condition/variable
  useEffect(() => {
    // if [], run once when the row loads and do not run again
  }, [movies]);

  return (
    <div>
      {/* title */}
      <h2>{title}</h2>
      {/* container -> posters */}
    </div>
  );
};

export default Row;
