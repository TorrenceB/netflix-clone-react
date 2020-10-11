import React from "react";
import "./App.css";
import Row from "./Components/Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <Row
        title="NETFLIX ORIGINALS"
        fetctUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetctUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
