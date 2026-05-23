import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaInstagram, FaArrowDown } from "react-icons/fa";
import ParticlesBg from "./ParticlesBg";

const Hero = () => {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen pt-28 md:pt-20 flex items-center bg-gradient-to-b from-white via-purple-50 to-white overflow-hidden"
    >
      {/* PARTICLES */}
      <div className="absolute inset-0 opacity-40 md:opacity-100 pointer-events-none">
        <ParticlesBg />
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16">
          {/* LEFT CONTENT */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            {/* NAME */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-900"
            >
              Hi, I'm <span className="text-purple-600">Sunita Jaiswal</span>
            </motion.h1>

            {/* TYPING TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-5 text-2xl md:text-3xl font-bold text-gray-800 h-[50px]"
            >
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
            </motion.div>

            {/* DESCRIPTION (FIXED + SHORT) */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-gray-900 font-bold text-lg leading-relaxed max-w-2xl mx-auto md:mx-0"
            >
              Creating modern, responsive and user-friendly web applications
              with clean UI and smooth experiences.
            </motion.p>

            {/* BUTTON */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex justify-center md:justify-start"
            >
              <a
                href="#projects"
                className="px-8 py-3 rounded-full bg-purple-600 text-white font-semibold shadow-lg hover:bg-purple-700 hover:scale-105 transition duration-300"
              >
                View Projects
              </a>
            </motion.div>

            {/* SOCIAL ICONS */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-8 flex items-center gap-5 justify-center md:justify-start"
            >
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-2xl text-gray-700 hover:text-purple-600 hover:-translate-y-1 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-2xl text-gray-700 hover:text-blue-600 hover:-translate-y-1 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://instagram.com/sumitajais_45905"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-2xl text-gray-700 hover:text-pink-500 hover:-translate-y-1 transition"
              >
                <FaInstagram />
              </a>
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="w-full md:w-1/2 flex justify-center relative"
          >
            {/* GLOW */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

            {/* IMAGE */}
            <img
              src="/s.jpeg"
              alt="Sunita"
              className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[370px] md:h-[370px] rounded-full object-cover border-4 border-purple-500 shadow-2xl hover:scale-105 transition duration-500"
            />
          </motion.div>
        </div>

        {/* SCROLL */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="hidden md:flex justify-center mt-16"
        >
          <a href="#about" className="animate-bounce text-purple-600 text-3xl">
            <FaArrowDown />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
