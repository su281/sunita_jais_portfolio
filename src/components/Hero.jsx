import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import ParticlesBg from "./ParticlesBg";

const Hero = () => {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative min-h-[110vh] py-20 flex items-center bg-white overflow-hidden w-full"
    >
      {/* 🔥 Particles (FIXED) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <ParticlesBg />
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between relative z-10 gap-10 px-4 sm:px-6">
        
        {/* LEFT TEXT */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Hi, I'm <span className="text-purple-600">Sunita Jaiswal</span>
          </h1>

          <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-black h-[40px]">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "Frontend Developer",
                2000,
                "React Developer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </h2>

          <p className="mt-5 text-black font-medium text-base sm:text-lg max-w-xl mx-auto md:mx-0">
            I build modern, responsive and scalable web applications using the
            latest technologies.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            
            <a
              href="#projects"
              className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition w-full sm:w-auto text-center"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-purple-600 text-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition w-full sm:w-auto text-center"
            >
              Contact Me
            </a>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0 relative">
          
          {/* Glow Effect */}
          <div className="absolute w-60 sm:w-80 h-60 sm:h-80 bg-purple-500/20 rounded-full blur-3xl"></div>

          {/* IMAGE */}
          <img
            src="/s.jpeg"
            alt="profile"
            className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover rounded-full border-4 border-purple-500 shadow-xl relative hover:scale-105 transition duration-300"
          />
        </div>

      </div>
    </motion.section>
  );
};

export default Hero;