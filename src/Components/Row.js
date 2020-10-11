import React, { useEffect, useState } from "react";
import axios from "../axios";

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  // A snippet of code which runs based on a specific condition/variable
  useEffect(() => {
    // if [], run once when the row loads and do not run again
    (async () => {
      const request = await axios.get(fetchUrl);
      console.log(request);
      return request;
    })();
  }, []);

  return (
    <div>
      {/* title */}
      <h2>{title}</h2>
      {/* container -> posters */}
    </div>
  );
};

export default Row;
