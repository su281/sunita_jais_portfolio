import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCode } from "react-icons/fa";

// -------- EXPERIENCE DATA --------
const experiences = [
  {
    role: "Java Developer Intern",
    company: "SPI Company, Lucknow",
    duration: "2024",
    points: [
      "Developed Java applications using OOP principles",
      "Implemented file handling and core backend logic",
      "Worked on real-world problem solving and debugging",
    ],
    icon: <FaCode />,
  },
  {
    role: "Full Stack Developer",
    company: "Personal Projects",
    duration: "2025 - Present",
    points: [
      "Built full-stack apps using React, Node.js, MongoDB",
      "Implemented authentication and REST APIs",
      "Created responsive UI for projects like Airbnb clone & chatbot",
    ],
    icon: <FaBriefcase />,
  },
];

// -------- CARD (SMALL + PROFESSIONAL) --------
const ExperienceCard = ({ exp }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.5 }}
      className="relative w-full md:w-[420px] px-2 sm:px-4 mx-auto"
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 blur opacity-20"></div>

      {/* Card */}
      <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-4 sm:p-5 shadow-lg hover:shadow-purple-500/30 transition-all duration-300">

        {/* ICON */}
        <div className="text-purple-400 text-lg mb-2">
          {exp.icon}
        </div>

        {/* ROLE */}
        <h3 className="text-base sm:text-lg font-semibold text-white">
          {exp.role}
        </h3>

        {/* COMPANY */}
        <p className="text-xs sm:text-sm text-purple-300">
          {exp.company}
        </p>

        {/* DURATION */}
        <p className="text-[11px] text-gray-400 mt-1">
          {exp.duration}
        </p>

        {/* POINTS */}
        <ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-gray-300">
          {exp.points.map((point, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-purple-400">•</span>
              {point}
            </li>
          ))}
        </ul>

      </div>
    </motion.div>
  );
};

// -------- MAIN PAGE --------
const Experience = () => {
  return (
    <section className="min-h-screen py-16 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-black via-gray-900 to-black">

      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-14 md:mb-20">

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold flex justify-center items-center gap-3 text-white">
            <FaBriefcase className="text-purple-500" />
            <span className="text-purple-500">Experience</span>
          </h2>

          <p className="text-gray-400 mt-3 text-sm md:text-base">
            My professional journey and development experience
          </p>

        </div>

        {/* TIMELINE */}
        <div className="relative">

          {/* LINE */}
          <div className="hidden md:block absolute left-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-purple-500 to-transparent transform -translate-x-1/2"></div>

          {/* ITEMS */}
          <div className="flex flex-col gap-10 md:gap-16">

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-6 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >

                {/* CARD */}
                <ExperienceCard exp={exp} />

                {/* DOT */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  className="hidden md:flex items-center justify-center w-9 h-9 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg z-10"
                >
                  {exp.icon}
                </motion.div>

                {/* SPACER */}
                <div className="hidden md:block w-1/2"></div>

              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;