import React, { useEffect } from "react";
import Particle from "./components/partickle"; // Particle effect
import AOS from "aos"; // Animation on scroll
import "aos/dist/aos.css"; // Import AOS styles
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Language from "./components/Language";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/footer";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <Particle />
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Language />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
