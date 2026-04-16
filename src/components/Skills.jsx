"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  FaCode,
  FaDatabase,
  FaTools,
  FaMobileAlt,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";

export default function Skills() {
  const ref = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Ensure component is mounted before animations
  useEffect(() => {
    setMounted(true);
  }, []);

  const categories = [
    { id: "all", name: "All Skills", icon: FaCode },
    { id: "frontend", name: "Frontend", icon: FaMobileAlt },
    { id: "backend", name: "Backend", icon: FaDatabase },
    { id: "database", name: "Database", icon: FaDatabase },
    { id: "tools", name: "Tools", icon: FaTools },
  ];

  const skillsData = [
    // Frontend
    {
      name: "JavaScript",
      icon: SiJavascript,
      level: 92,
      category: "frontend",
      color: "#F7DF1E",
      years: 1,
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      level: 85,
      category: "frontend",
      color: "#3178C6",
      years: 0.5,
    },
    {
      name: "React.js",
      icon: SiReact,
      level: 90,
      category: "frontend",
      color: "#61DAFB",
      years: 1,
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      level: 85,
      category: "frontend",
      color: "#ffffff",
      years: 1,
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      level: 88,
      category: "frontend",
      color: "#06B6D4",
      years: 1,
    },
    // Backend
    {
      name: "Node.js",
      icon: SiNodedotjs,
      level: 88,
      category: "backend",
      color: "#339933",
      years: 1,
    },
    {
      name: "Express.js",
      icon: SiExpress,
      level: 87,
      category: "backend",
      color: "#ffffff",
      years: 1,
    },
    // Database
    {
      name: "MongoDB",
      icon: SiMongodb,
      level: 85,
      category: "database",
      color: "#47A248",
      years: 1,
    },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
      level: 75,
      category: "database",
      color: "#4169E1",
      years: 0.5,
    },
    // Tools
    {
      name: "Git",
      icon: FaGitAlt,
      level: 75,
      category: "tools",
      color: "#F05032",
      years: 1,
    },
    {
      name: "Figma",
      icon: FaFigma,
      level: 75,
      category: "tools",
      color: "#F24E1E",
      years: 1,
    },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  // Calculate average skill level
  const averageLevel = Math.round(
    skillsData.reduce((acc, skill) => acc + skill.level, 0) / skillsData.length
  );

  // Simple server-side fallback
  if (!mounted) {
    return (
      <section
        ref={ref}
        id="skills"
        className="py-20 px-4 relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technical <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.slice(0, 6).map((skill, index) => (
              <div key={index} className="bg-white/5 rounded-xl p-5 border border-white/10">
                <div className="h-2 bg-white/10 rounded-full w-full mb-4" />
                <div className="text-white font-semibold">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={ref}
      id="skills"
      className="py-20 px-4 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-purple-500/5 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4"
          >
            <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-sm text-purple-300">What I bring to the table</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
          
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Technologies and tools I've worked with over 0.5+ years of development journey
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Skills", value: skillsData.length, suffix: "+", icon: FaCode },
            { label: "Years Experience", value: "0.5", suffix: "+", icon: FaCode },
            { label: "Average Proficiency", value: averageLevel, suffix: "%", icon: FaCode },
            { label: "Tech Stack", value: "MERN", suffix: "", icon: FaCode },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25"
                    : "bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10"
                }`}
              >
                <Icon className="text-sm" />
                <span className="text-sm font-medium">{category.name}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-purple-500/50 transition-all duration-300 overflow-hidden"
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500" />
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/5 group-hover:scale-110 transition-transform">
                      <skill.icon className="text-2xl" style={{ color: skill.color }} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{skill.name}</h3>
                      <p className="text-xs text-gray-500 capitalize">{skill.category}</p>
                    </div>
                  </div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {skill.level}%
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-3">
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 animate-shimmer" />
                    </motion.div>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex justify-between text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <FaCode className="text-[10px]" />
                    {skill.years}+ years
                  </span>
                  <span className="flex items-center gap-1">
                    {skill.level >= 90 ? "Expert" : skill.level >= 80 ? "Advanced" : "Intermediate"}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Radar / Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <FaCode className="text-white text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Always Learning</h3>
                <p className="text-sm text-gray-400">
                  Currently exploring AI/ML and Web3 technologies
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">2+</div>
                <div className="text-xs text-gray-500">Certifications</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-400">∞</div>
                <div className="text-xs text-gray-500">Curiosity</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
}