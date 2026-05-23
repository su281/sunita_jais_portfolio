 import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJava,
  FaPython,
  FaGithub,
  FaNodeJs,
  FaCode,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiBootstrap,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
  { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500" },
  { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
  { name: "React", icon: <FaReact />, color: "text-cyan-400" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-600" },
  { name: "SQL", icon: <SiMysql />, color: "text-blue-600" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "text-sky-400" },
  { name: "Bootstrap", icon: <SiBootstrap />, color: "text-purple-500" },

  // 👇 THESE WILL BE BOLD + DARK BLACK
  { name: "Java", icon: <FaJava />, color: "text-black font-bold" },
  { name: "Python", icon: <FaPython />, color: "text-black font-bold" },
  { name: "GitHub", icon: <FaGithub />, color: "text-gray-800 font-bold" },
  { name: "C Language", icon: <FaJava />, color: "text-black font-bold" },
  { name: "Machine Learning", icon: <FaPython />, color: "text-black font-bold" },
  { name: "Linux", icon: <FaGithub />, color: "text-black font-bold" },
];

// ---------------- ANIMATION ----------------
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

// ---------------- BACKGROUND ----------------
const Background = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#070A1A]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F2C] via-[#0B1638] to-[#05060F]" />
    </div>
  );
};

// ---------------- SKILL CARD ----------------
const SkillCard = ({ skill }) => {
  return (
    <motion.div
      variants={item}
      className="group relative w-full max-w-[180px] h-32 sm:h-36 mx-auto"
    >
      {/* glow border */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-20 blur-md group-hover:opacity-60 transition" />

      {/* CARD */}
      <div
        className="relative h-full w-full bg-white text-black rounded-xl flex flex-col justify-center items-center
        shadow-sm transition duration-300 transform
        group-hover:scale-105 group-hover:-rotate-1 group-hover:shadow-xl"
      >
        {/* icon */}
        <div
          className={`text-2xl sm:text-3xl mb-1 sm:mb-2 ${skill.color} group-hover:scale-110 transition`}
        >
          {skill.icon}
        </div>

        {/* name */}
        <h3 className="font-medium text-xs sm:text-sm tracking-wide text-center px-1">
          {skill.name}
        </h3>

        {/* shine */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-transparent via-white/40 to-transparent rotate-12 transition" />
      </div>
    </motion.div>
  );
};

// ---------------- MAIN ----------------
const Skills = () => {
  return (
    <section className="relative min-h-screen text-white py-12 sm:py-16 px-4 sm:px-6 overflow-hidden">
      <Background />

      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-10 sm:mb-12"
      >
        <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold flex justify-center items-center gap-3 group">
          <span className="text-purple-400 text-2xl sm:text-3xl group-hover:rotate-12 transition">
            <FaCode />
          </span>

          <span className="relative">
            Skills & <span className="text-purple-500">Abilities</span>

            <span className="absolute left-1/2 -bottom-2 w-0 h-[3px] bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-500 group-hover:w-full group-hover:left-0 rounded-full"></span>
          </span>
        </h4>

        <p className="text-gray-400 mt-3 sm:mt-4 text-sm sm:text-lg">
          Technologies I work with
        </p>
      </motion.div>

      {/* GRID */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5"
      >
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </motion.div>
    </section>
  );
};

export default Skills; 