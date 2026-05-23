import React from "react";
import { motion } from "framer-motion";
import { FaUserAlt, FaCode, FaLaptopCode, FaDownload } from "react-icons/fa";

const skills = [
  "React",
  "JavaScript",
  "Node.js",
  "MongoDB",
  "Tailwind CSS",
  "Git & GitHub",
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <section
      id="about"
      className="relative py-14 sm:py-16 px-4 sm:px-6 overflow-hidden bg-gradient-to-br from-[#eef2ff] via-[#fdf2f8] to-[#eef2ff]"
    >
      {/* Glow Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[350px] h-[350px] bg-purple-400/20 blur-[120px] rounded-full top-10 left-10 animate-pulse" />
        <div className="absolute w-[300px] h-[300px] bg-pink-400/20 blur-[120px] rounded-full bottom-10 right-10 animate-pulse" />
      </div>

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold flex justify-center items-center gap-3 text-black">
            <FaUserAlt className="text-purple-600" />
            About <span className="text-purple-600 font-extrabold">Me</span>
          </h2>

          <p className="mt-2 text-black font-semibold max-w-xl mx-auto text-sm sm:text-base">
            Passionate Full Stack Developer building modern, scalable & interactive web apps.
          </p>
        </motion.div>

        {/* GLASS CARD */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* IMAGE CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition" />

              <img
                src="/s.jpeg"
                alt="Sunita"
                className="relative w-64 h-64 sm:w-72 sm:h-72 object-cover rounded-3xl border border-white/40 shadow-2xl group-hover:scale-105 transition duration-500"
              />
            </div>
          </motion.div>

          {/* CONTENT CARD */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="backdrop-blur-xl bg-white/40 border border-white/50 rounded-3xl p-6 sm:p-8 shadow-xl space-y-5"
          >

            {/* TITLE */}
            <motion.div variants={item}>
              <h3 className="text-2xl sm:text-3xl font-bold flex items-center gap-2 text-black">
                <FaLaptopCode className="text-purple-600" />
                I'm Sunita
              </h3>
              <p className="text-black font-semibold text-sm mt-1">
                Full Stack Developer | React • Node • MongoDB
              </p>
            </motion.div>

            {/* BIO */}
            <div className="space-y-3 text-black font-medium text-sm leading-relaxed">

              <motion.p variants={item} className="flex gap-2 font-semibold">
                <FaCode className="text-purple-600 mt-1" />
                Full Stack Developer based in India, pursuing B.Tech in CSE (Data Science) from JSSATEN.
              </motion.p>

              <motion.p variants={item} className="flex gap-2 font-semibold">
                <FaCode className="text-purple-600 mt-1" />
                I build responsive, high-performance web apps using modern technologies.
              </motion.p>

              <motion.p variants={item} className="flex gap-2 font-semibold">
                <FaCode className="text-purple-600 mt-1" />
                I love clean UI, smooth animations & scalable architecture.
              </motion.p>

            </div>

            {/* INFO */}
            <motion.div variants={item} className="text-sm text-black font-semibold space-y-1">
              <p><span className="font-bold">Email:</span> sj414435@gmail.com</p>
              <p><span className="font-bold">Place:</span> Noida, India</p>
            </motion.div>

            {/* SKILLS */}
            <motion.div variants={item} className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-semibold rounded-full bg-white/60 border border-purple-200 text-black hover:bg-purple-600 hover:text-white transition"
                >
                  {skill}
                </span>
              ))}
            </motion.div>

            {/* BUTTON */}
            <motion.a
              variants={item}
              href="/Sunita resume.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 px-5 py-2 font-semibold bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl shadow-md hover:scale-105 transition"
            >
              <FaDownload />
              Download Resume
            </motion.a>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;