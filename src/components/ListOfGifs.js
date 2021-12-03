import React, { useState, useEffect } from "react";
import getApi from "../services/getApi";
import Gif from "./Gif";

const ListOfGifs = ({ params }) => {
  const { keyword } = params;
  //State para los gifs
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getApi({ keyword }).then((gifs) => setGifs(gifs));
  }, [keyword]);

  return (
    <div>
      {gifs.map((singleGif) => (
        <Gif
          key={singleGif.id}
          title={singleGif.title}
          id={singleGif.id}
          url={singleGif.url}
        />
      ))}
    </div>
  );
};

export default ListOfGifs;
