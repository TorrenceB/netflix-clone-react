import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../requests";

function Banner() {
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
    console.log(`Movie: ${movie}`);
  }, []);

  return (
    <header>
      {/* Background Image */}
      {/* title */}
      {/* div > 2 buttons */}
      {/* description */}
    </header>
  );
}

export default Banner;
