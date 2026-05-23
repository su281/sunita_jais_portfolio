import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaTimes,
  FaCode,
} from "react-icons/fa";

// ---------------- PROJECT DATA ----------------
const projects = [
  {
    title: "Airbnb Clone",
    description: "Full-stack Airbnb clone with authentication & booking system.",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    github: "https://github.com/su281/airbnb-project",
    live: "https://airbnb-project-six.vercel.app/",
    featured: true,
  },
  {
    title: "AI Chatbot",
    description: "AI chatbot using modern AI APIs.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    github: "https://github.com/su281/ai-chatbot",
    live: "https://ai-chatbot-demo.vercel.app/",
  },
  {
    title: "Student Grade System",
    description: "System to manage and calculate student grades.",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350",
    github: "https://github.com/su281/Student-grade-",
    live: "https://student-grade-system.vercel.app/",
  },
];

// ---------------- CARD ----------------
const ProjectCard = ({ project, setSelected, dark }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4 }}
    >
      <Tilt glareEnable glareMaxOpacity={0.08} scale={1.03}>
        <div
          className={`relative rounded-2xl overflow-hidden group 
          ${dark ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"}
          border shadow-sm hover:shadow-2xl hover:shadow-purple-400/30
          transition-all duration-500`}
        >
          {/* IMAGE */}
          <div className="relative overflow-hidden">
            <img
              src={project.image}
              alt=""
              className="w-full h-44 sm:h-52 object-cover transform group-hover:scale-110 transition duration-700"
            />

            {/* Hover Buttons */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 hidden sm:flex items-center justify-center gap-4 transition">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-white text-black rounded-lg text-sm flex items-center gap-2"
              >
                <FaGithub /> Code
              </a>

              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm flex items-center gap-2"
              >
                <FaExternalLinkAlt /> Live
              </a>
            </div>
          </div>

          {/* CONTENT */}
          <div
            onClick={() => setSelected(project)}
            className="p-4 cursor-pointer"
          >
            <h3
              className={`text-base sm:text-lg font-semibold ${
                dark ? "text-white" : "text-gray-900"
              } group-hover:text-purple-600`}
            >
              {project.title}
            </h3>

            <p
              className={`text-xs sm:text-sm mt-2 ${
                dark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {project.description}
            </p>
          </div>

          {/* Mobile Buttons */}
          <div className="flex sm:hidden gap-3 px-4 pb-4">
            <a
              href={project.github}
              className="px-3 py-2 bg-purple-600 text-white rounded text-xs w-full text-center"
            >
              Code
            </a>
            <a
              href={project.live}
              className="px-3 py-2 bg-purple-500 text-white rounded text-xs w-full text-center"
            >
              Live
            </a>
          </div>

          {project.featured && (
            <span className="absolute top-3 left-3 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
              Featured
            </span>
          )}
        </div>
      </Tilt>
    </motion.div>
  );
};

// ---------------- MODAL ----------------
const Modal = ({ project, setSelected, dark }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div
        className={`rounded-2xl p-5 sm:p-6 max-w-lg w-full relative ${
          dark ? "bg-gray-900 text-white" : "bg-white"
        }`}
      >
        <button
          onClick={() => setSelected(null)}
          className="absolute top-3 right-3 text-gray-500 hover:text-purple-600"
        >
          <FaTimes />
        </button>

        <img src={project.image} alt="" className="rounded-xl mb-4" />

        <h2 className="text-xl sm:text-2xl font-semibold">
          {project.title}
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          {project.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mt-5">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-purple-600 text-white rounded-lg flex items-center gap-2 text-sm"
          >
            <FaGithub /> Code
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-purple-500 text-white rounded-lg flex items-center gap-2 text-sm"
          >
            <FaExternalLinkAlt /> Live
          </a>
        </div>
      </div>
    </div>
  );
};

// ---------------- MAIN ----------------
const Projects = () => {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("All");
  const [dark, setDark] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1200);
  }, []);

  const filteredProjects =
    filter === "All"
      ? projects
      : filter === "Featured"
      ? projects.filter((p) => p.featured)
      : projects.filter((p) => !p.featured);

  return (
    <section
      className={`min-h-screen pt-8 sm:pt-10 pb-14 px-3 sm:px-4 ${
        dark ? "bg-black text-white" : "bg-gray-50"
      }`}
    >
      {/* DARK MODE BUTTON */}
      <button
        onClick={() => setDark(!dark)}
        className="fixed top-5 right-5 px-4 py-2 bg-purple-600 text-white rounded-full text-sm z-50"
      >
        {dark ? "Light ☀️" : "Dark 🌙"}
      </button>

      <div className="max-w-6xl mx-auto">

        {/* HEADING WITH ANIMATION */}
        <div className="text-center mb-6 sm:mb-8 overflow-hidden">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold flex items-center justify-center gap-3 flex-wrap">
            <FaCode className="text-purple-600 text-xl sm:text-2xl md:text-3xl" />

            {["Projects", "Made"].map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.3,
                }}
                className={`${
                  word === "Made"
                    ? "text-purple-600"
                    : dark
                    ? "text-white"
                    : "text-black"
                }`}
              >
                {word}
              </motion.span>
            ))}
          </h2>
        </div>

        {/* FILTER */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-8 flex-wrap">
          {["All", "Featured", "Others"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm ${
                filter === f
                  ? "bg-purple-600 text-white"
                  : dark
                  ? "bg-gray-800 text-gray-300 border border-gray-700"
                  : "bg-white border"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* GRID */}
        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-4 rounded-xl bg-white animate-pulse">
                <div className="h-40 bg-gray-300 rounded mb-4"></div>
                <div className="h-4 bg-gray-300 w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-200 w-full"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProjects.map((project, i) => (
              <ProjectCard
                key={i}
                project={project}
                setSelected={setSelected}
                dark={dark}
              />
            ))}
          </div>
        )}
      </div>

      <Modal project={selected} setSelected={setSelected} dark={dark} />
    </section>
  );
};

export default Projects;