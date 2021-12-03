import React from "react";
import ListOfGifs from "./components/ListOfGifs";
import { Link, Route } from "wouter";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <section className="App-header">
        <Link to="gif/cat">Git cat</Link>
        <Route path="/gif/:keyword" component={ListOfGifs} />
      </section>
    </div>
  );
};

export default App;
