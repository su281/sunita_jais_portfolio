import React from "react";
import Hero from "../components/Hero";

import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";
import Education from "./Education"; // ✅ added

const Home = () => {
  return (
    <>
      {/* HERO */}
      <section id="home">
        <Hero />
      </section>

      {/* ABOUT */}
      <section id="about">
        <About />
      </section>

      {/* SKILLS */}
      <section id="skills">
        <Skills />
      </section>

      {/* EDUCATION */}
      <section id="education">
        <Education />
      </section> 

      {/* PROJECTS */}
      <section id="projects">
        <Projects />
      </section>

      {/* EXPERIENCE */}
      <section id="experience">
        <Experience />
      </section>

      {/* CONTACT */}
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;