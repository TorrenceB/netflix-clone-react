import React from "react";
import "./App.css";
import Row from "./Components/Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <h1>Netflix header goes here.</h1>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
