import React, { useContext } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Safety from "./components/Safety";
import Services from "./components/Services";
import Watch from "./components/Watch";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeContext } from "./components/ThemeContext";

function App() {
  const { darkmode } = useContext(ThemeContext);
  return (
    <div className={darkmode ? "dark" : "App"}>
      <Header />
      <Hero />
      <About />
      <Safety />
      <Services />
      <Watch />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
