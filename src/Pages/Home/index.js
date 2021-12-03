import React, { useState } from "react";
import { Link, useLocation } from "wouter";

const Home = () => {
  const PupularGifs = ["cat"];

  //state para buscar
  const [keyword, setKeyword] = useState("");

  const [path, pushLocation] = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    // navegar a otra ruta
    pushLocation(`search/${keyword}`);
  };
  const handleChange = (e) => {
    setKeyword(e.target.value);
  };
  return (
    <>
      <h3>Los gifs mas pooulares</h3>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search a gif here.."
          onChange={handleChange}
          type="text"
          value={keyword}
        />
      </form>
      <ul>
        {PupularGifs.map((popular) => (
          <li key={popular}>
            <Link to={`/search/${popular}`}>Gifs de {popular}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
