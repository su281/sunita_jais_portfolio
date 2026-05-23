import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_69m54fh",
        "template_2iie69j",
        formRef.current,
        "OrCd6AavpwD6ytS6H"
      )
      .then(
        () => {
          setMsg("Message sent successfully ✅");
          setLoading(false);
          formRef.current.reset();
        },
        () => {
          setMsg("Failed to send message ❌");
          setLoading(false);
        }
      );
  };

  const fadeUp = {
    hidden: { opacity: 0, y: -40, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[aliceblue] text-gray-900 px-4 sm:px-6 md:px-10 py-10">

      <div className="w-full max-w-6xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-2">
            <FaPaperPlane className="text-blue-600 text-lg" />
            <h2 className="text-2xl sm:text-3xl font-bold">
              Get in Touch
            </h2>
          </div>

          <div className="w-16 sm:w-20 h-1 bg-blue-600 mx-auto mt-2 rounded-full"></div>

          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Drop your message, I’ll reply soon
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">

          {/* LEFT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
              alt="developer"
              className="rounded-2xl shadow-xl w-full max-w-[280px] sm:max-w-sm md:max-w-md object-cover hover:scale-105 transition"
            />

            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-5">
              Let’s Work Together 🚀
            </h2>

            <div className="flex gap-4 mt-4 text-lg sm:text-xl text-gray-700">
              <FaGithub className="hover:text-blue-600 cursor-pointer" />
              <FaLinkedin className="hover:text-blue-600 cursor-pointer" />
              <FaEnvelope className="hover:text-blue-600 cursor-pointer" />
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="bg-white border border-gray-200 p-4 sm:p-6 rounded-2xl shadow-xl w-full max-w-md">

              <form ref={formRef} onSubmit={sendEmail} className="space-y-3">

                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className="w-full p-3 rounded bg-gray-100 border outline-none focus:border-blue-500 text-sm sm:text-base"
                />

                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                  className="w-full p-3 rounded bg-gray-100 border outline-none focus:border-blue-500 text-sm sm:text-base"
                />

                <input
                  type="tel"
                  name="user_phone"
                  placeholder="Phone (optional)"
                  className="w-full p-3 rounded bg-gray-100 border outline-none focus:border-blue-500 text-sm sm:text-base"
                />

                <textarea
                  name="message"
                  placeholder="Your Message..."
                  rows="4"
                  required
                  className="w-full p-3 rounded bg-gray-100 border outline-none focus:border-blue-500 text-sm sm:text-base"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded font-semibold transition text-sm sm:text-base"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

              </form>

              {msg && (
                <p className="text-center mt-3 text-sm text-green-600">
                  {msg}
                </p>
              )}

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;