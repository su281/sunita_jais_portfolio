import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: -40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const Footer = () => {
  return (
    <footer className="relative text-white px-5 sm:px-6 md:px-10 py-12 sm:py-8 overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-black" />
      <div className="absolute inset-0 backdrop-blur-3xl bg-white/5" />

      {/* MAIN GRID */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center sm:text-left">
        {/* LEFT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col items-center sm:items-start"
        >
          <h1 className="text-2xl sm:text-3xl font-bold tracking-wide">
            Sunita Portfolio
          </h1>

          <p className="text-gray-400 mt-4 leading-relaxed text-sm sm:text-base">
            Thank you for visiting my personal portfolio website. Connect with
            me over socials.
          </p>

          <p className="text-blue-400 mt-3 font-medium text-sm sm:text-base">
            Building the future with Kotlin & AI 
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 sm:gap-5 mt-6 text-lg sm:text-xl">
            <a className="p-2 sm:p-3 rounded-full bg-white/5 hover:bg-blue-500/20 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30">
              <FaGithub />
            </a>

            <a className="p-2 sm:p-3 rounded-full bg-white/5 hover:bg-blue-500/20 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30">
              <FaLinkedin />
            </a>

            <a className="p-2 sm:p-3 rounded-full bg-white/5 hover:bg-blue-500/20 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30">
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        {/* MIDDLE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-semibold mb-6">Quick Links</h2>

          <ul className="space-y-2 text-gray-400 flex flex-col items-center sm:items-start">
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Skills", "/skills"],
              ["Projects", "/projects"],
              ["Experience", "/experience"],
              ["Contact", "/contact"],
            ].map(([name, path], i) => (
              <li key={i}>
                <Link to={path} className="relative inline-block group">
                  <span className="text-blue-400 mr-2">{">"}</span>
                  {name}

                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-semibold mb-6">Contact Info</h2>

          <div className="space-y-4 text-gray-400 flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-3 hover:text-white transition">
              <FaPhone className="text-blue-400" />
              <span>+91 9918528638</span>
            </div>

            <div className="flex items-center gap-3 hover:text-white transition">
              <FaEnvelope className="text-blue-400" />
              <span className="text-sm sm:text-base">sj414435@gmail.com</span>
            </div>

            <div className="flex items-center gap-3 hover:text-white transition">
              <span className="text-blue-400">📍</span>
              <span className="text-sm sm:text-base">
                Noida, India - 201309
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative text-center text-gray-500 mt-3 sm:mt-4 border-t border-gray-800 pt-3 text-sm sm:text-base"
      >
        Designed with <span className="text-blue-400">♥</span> by{" "}
        <span className="text-white font-semibold">Sunita Jaiswal</span>
      </motion.div>
    </footer>
  );
};

export default Footer;
