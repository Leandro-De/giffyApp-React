import React, { useState, useEffect } from "react";
import getApi from "./services/getApi";

import "./App.css";

const App = () => {
  //State para los gifs
  const [gifs, setGifs] = useState([""]);

  useEffect(() => {
    getApi({ keyword: "morty" }).then((gifs) => setGifs(gifs));
  }, []);

  return (
    <div className="App">
      <section className="App-header">
        {gifs.map((singleGif) => (
          <img src={singleGif} />
        ))}
      </section>
    </div>
  );
};

export default App;
