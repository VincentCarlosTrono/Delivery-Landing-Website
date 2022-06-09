import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Safety from "./components/Safety";
import Services from "./components/Services";
import Watch from "./components/Watch";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Safety />
      <Services />
      <Watch />
    </div>
  );
}

export default App;
