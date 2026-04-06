"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Handle dark mode
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  // Handle scroll effects & active section detection
  useEffect(() => {
    const handleScroll = () => {
      // Navbar background change on scroll
      setScrolled(window.scrollY > 50);

      // Active section detection
      const sections = document.querySelectorAll("section");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          current = section.getAttribute("id") || "";
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on link click
  const handleLinkClick = (href) => {
    setMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl"
            : "bg-white/5 backdrop-blur-lg border-b border-white/10"
        }`}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3 md:px-6 md:py-4">
          {/* Logo with Photo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleLinkClick("#home")}
          >
            {/* Profile Photo as Logo */}
            <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-indigo-500/50 group-hover:border-indigo-400 transition-all duration-300">
              <Image
                src="/logo.jpg"
                alt="Sakuni Logo"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  e.target.style.display = 'none';
                  e.target.parentElement.classList.add('bg-gradient-to-r', 'from-indigo-500', 'to-purple-500');
                  e.target.parentElement.innerHTML = '<span class="text-white text-xl font-bold">S</span>';
                }}
              />
            </div>
            
            {/* Name */}
            <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Sakuni.dev
            </h1>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  activeSection === link.href.slice(1)
                    ? "text-indigo-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
                {activeSection === link.href.slice(1) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-indigo-500/10 rounded-lg -z-10"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                {activeSection === link.href.slice(1) && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
              </motion.a>
            ))}

            {/* Dark Mode Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setDark(!dark)}
              className="ml-4 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300"
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: dark ? 0 : 180 }}
                transition={{ duration: 0.3 }}
              >
                {dark ? (
                  <FaSun className="text-yellow-400 text-lg" />
                ) : (
                  <FaMoon className="text-gray-300 text-lg" />
                )}
              </motion.div>
            </motion.button>
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setDark(!dark)}
              className="p-2 rounded-full bg-white/5"
            >
              {dark ? (
                <FaSun className="text-yellow-400" />
              ) : (
                <FaMoon className="text-gray-300" />
              )}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-full bg-white/5"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed right-0 top-0 h-full w-64 bg-gradient-to-b from-gray-900 to-black border-l border-white/10 z-50 md:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Header with Profile Photo */}
                <div className="flex flex-col items-center p-6 border-b border-white/10">
                  {/* Profile Photo in Mobile Menu */}
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-indigo-500/50 mb-3">
                    <Image
                      src="/logo.jpg"
                      alt="Sakuni Logo"
                      fill
                      className="object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.classList.add('bg-gradient-to-r', 'from-indigo-500', 'to-purple-500');
                        e.target.parentElement.innerHTML = '<span class="text-white text-2xl font-bold">S</span>';
                      }}
                    />
                  </div>
                  <h2 className="text-xl font-bold text-indigo-400">Sakuni</h2>
                  <p className="text-xs text-gray-500 mt-1">Full Stack Developer</p>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 flex flex-col p-6 gap-2">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(link.href);
                      }}
                      className={`px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300 ${
                        activeSection === link.href.slice(1)
                          ? "bg-indigo-500/20 text-indigo-400 border-l-4 border-indigo-400"
                          : "text-gray-300 hover:bg-white/5 hover:pl-6"
                      }`}
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>

                
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}