import React from "react";
import Home from "./Pages/Home";
import { Link, Route } from "wouter";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <section className="App-header">
        <Link to="/">Hola</Link>
        <Route path="/" component={Home} />
      </section>
    </div>
  );
};

export default App;
