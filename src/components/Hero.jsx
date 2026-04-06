"use client";

import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaDownload, FaEnvelope, FaArrowDown, FaEye } from "react-icons/fa";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [particles, setParticles] = useState([]);
  const [mounted, setMounted] = useState(false);

  // 3D Tilt effect for profile image
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 30 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  // Mouse move effect for 3D tilt
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const moveX = (e.clientX - centerX) / 100;
    const moveY = (e.clientY - centerY) / 100;
    x.set(moveX);
    y.set(moveY);
  };

  // Initialize particles only on client side to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
    const generatedParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      left: Math.random() * 100,
      animationDuration: Math.random() * 10 + 5,
      animationDelay: Math.random() * 5,
    }));
    setParticles(generatedParticles);
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "Sakuni_Rajapaksha_CV.pdf";
    link.click();
  };

  const handleViewCV = () => {
    window.open("/cv.pdf", "_blank");
  };

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  // Don't render particles on server, only on client
  if (!mounted) {
    return (
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
      >
        {/* Simple background without particles for SSR */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/50 via-purple-950/30 to-pink-950/50">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent" />
        </div>

        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left content - static version */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
              <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              <span className="text-sm text-indigo-300">Available for work</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hello, I'm{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Sakuni
              </span>
            </h1>
            <div className="mt-6 text-xl md:text-2xl text-gray-300">
              Loading...
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 animate-pulse" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/50 via-purple-950/30 to-pink-950/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent" />
      </div>

      {/* Floating Particles - Only rendered on client */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute bg-indigo-400/20 rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.left}%`,
              top: "-10%",
            }}
            animate={{
              y: ["0vh", "120vh"],
              x: [`${Math.random() * 20 - 10}%`, `${Math.random() * 20 - 10}%`],
            }}
            transition={{
              duration: particle.animationDuration,
              repeat: Infinity,
              delay: particle.animationDelay,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Animated Gradient Orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[500px] h-[500px] bg-indigo-500 blur-[150px] opacity-20 rounded-full top-20 left-20"
      />
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[400px] h-[400px] bg-purple-500 blur-[150px] opacity-20 rounded-full bottom-20 right-20"
      />

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-sm text-indigo-300">Available for work</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            Hello, I'm{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Sakuni
            </span>
          </motion.h1>

          {/* Typing Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-xl md:text-2xl text-gray-300"
          >
            I am a{" "}
            <span className="font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "MERN Stack Developer",
                  2000,
                  "UI/UX Enthusiast",
                  2000,
                  "Problem Solver",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
                wrapper="span"
              />
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-6 text-gray-400 leading-relaxed"
          >
            I build exceptional and accessible digital experiences that leave a lasting impact. 
            Specialized in creating modern web applications with cutting-edge technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="relative group px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold overflow-hidden"
            >
              <span className="relative z-10">Hire Me</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
              className="px-8 py-3 rounded-xl border-2 border-indigo-500/50 hover:border-indigo-400 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20"
            >
              View Projects
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleViewCV}
              className="px-8 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-white font-semibold flex items-center gap-2 hover:bg-white/10 transition-all group"
            >
              <FaEye className="text-sm group-hover:text-indigo-400 transition-colors" />
              View CV
            </motion.button>

          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="mt-10 flex items-center gap-4"
          >
            <div className="flex gap-4">
              {[
                { icon: FaGithub, href: "https://github.com/sakunirajapaksha", label: "GitHub" },
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/sakuni-rajapaksha-964a29264", label: "LinkedIn" },
                { icon: FaEnvelope, href: "mailto:sakunirajapaksha007@gmail.com", label: "Email" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-white/5 hover:bg-indigo-500/20 text-gray-300 hover:text-indigo-400 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="text-xl" />
                </motion.a>
              ))}
            </div>
            <div className="h-8 w-px bg-white/10" />
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-sm text-gray-400 flex items-center gap-2"
            >
              <span>0.5+ Years Experience</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* RIGHT PROFILE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="flex justify-center relative"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => {
            setIsHovering(false);
            x.set(0);
            y.set(0);
          }}
        >
          <motion.div
            style={{
              rotateX: isHovering ? rotateX : 0,
              rotateY: isHovering ? rotateY : 0,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative"
          >
            {/* Animated Rings */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-full border-2 border-indigo-500/30"
              style={{ width: "300px", height: "300px", top: "-10px", left: "-10px" }}
            />
            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-full border-2 border-purple-500/30"
              style={{ width: "320px", height: "320px", top: "-20px", left: "-20px" }}
            />

            {/* Glow Effects */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-2xl opacity-50"
            />

            {/* Profile Image Container */}
            <div className="relative group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[3px] blur-sm group-hover:blur-md transition-all duration-300">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-spin-slow" />
              </div>
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                <img
                  src="/profile.jpg"
                  alt="Sakuni - Full Stack Developer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>

            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, type: "spring" }}
              className="absolute bottom-5 right-5 bg-black/80 backdrop-blur-md rounded-full px-4 py-2 border border-white/10"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-medium">Open to work</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToProjects}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-400 uppercase tracking-wider">Scroll</span>
          <FaArrowDown className="text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}