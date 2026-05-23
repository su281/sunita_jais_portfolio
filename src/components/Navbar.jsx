import React, { useState, useEffect } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Education", id: "education" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150;

      let currentSection = "";

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);

        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;

          if (scrollPos >= top && scrollPos < bottom) {
            currentSection = item.id;
          }
        }
      });

      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id) => {
    const section = document.getElementById(id);

    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }

    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full max-w-[100vw] overflow-x-hidden z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-sm">

      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-4">

        {/* LOGO */}
        <h1 className="text-xl font-bold text-gray-900 tracking-wide">
          sunita
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-black font-bold mr-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className="relative"
            >
              <span
                className={
                  activeSection === item.id
                    ? "text-purple-600"
                    : "text-black hover:text-purple-600"
                }
              >
                {item.name}
              </span>

              {/* Underline */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-purple-600 transition-all duration-300 ${
                  activeSection === item.id ? "w-full" : "w-0"
                }`}
              ></span>
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden w-full max-w-[100vw] overflow-hidden flex flex-col items-center gap-6 bg-white py-6 border-t border-gray-200 shadow-md">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className="font-bold"
            >
              <span
                className={
                  activeSection === item.id
                    ? "text-purple-600"
                    : "text-black hover:text-purple-600"
                }
              >
                {item.name}
              </span>
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;