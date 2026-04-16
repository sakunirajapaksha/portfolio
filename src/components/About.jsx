"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  FaCode,
  FaServer,
  FaCloud,
  FaLaptopCode,
  FaUsers,
  FaRocket,
  FaAward,
  FaHeart,
  FaGraduationCap,
  FaBriefcase,
  FaCalendarAlt,
  FaUniversity,
  FaSchool,
} from "react-icons/fa";
import { SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiPostgresql } from "react-icons/si";

export default function About() {
  const ref = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [yearsOfExperience, setYearsOfExperience] = useState(0.5);
  const [projectsCompleted, setProjectsCompleted] = useState(3);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Ensure component is mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  // Counter animation
  useEffect(() => {
    if (isInView && mounted) {
      const duration = 2000;
      const stepTime = 20;
      const steps = duration / stepTime;

      let currentYears = 0.5;
      let currentProjects = 2;

      const interval = setInterval(() => {
        if (currentYears < 0.5) {
          currentYears += 0.5 / steps;
          setYearsOfExperience(Number(Math.min(currentYears, 0.5).toFixed(1)));
        }
        if (currentProjects < 3) {
          currentProjects += 3 / steps;
          setProjectsCompleted(Math.min(Math.floor(currentProjects), 3));
        }

        if (currentYears >= 0.5 && currentProjects >= 3) {
          clearInterval(interval);
        }
      }, stepTime);

      return () => clearInterval(interval);
    }
  }, [isInView, mounted]);

  const features = [
    {
      icon: FaCode,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FaRocket,
      title: "Fast Performance",
      description: "Optimized applications with blazing fast load times",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: FaUsers,
      title: "Team Player",
      description: "Excellent collaboration and communication skills",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: FaHeart,
      title: "Passionate",
      description: "Love for learning and staying updated with tech trends",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const techStack = [
    { name: "React.js", icon: SiReact, level: 80, color: "#61DAFB" },
    { name: "Node.js", icon: SiNodedotjs, level: 80, color: "#339933" },
    { name: "MongoDB", icon: SiMongodb, level: 70, color: "#47A248" },
    { name: "PostgreSQL", icon: SiPostgresql, level: 70, color: "#4169E1" },
    { name: "Tailwind CSS", icon: SiTailwindcss, level: 88, color: "#06B6D4" },
  ];

  const education = [
    {
      degree: "BIT Top-up planning",
      institution: "Colombo BIT (Expected)",
      period: "2026",
      description: "Planning to pursue BSc (Hons) Top-up degree",
      icon: FaGraduationCap,
      color: "from-purple-500 to-pink-500",
      details: ["Planning to start in 2026 after completing HND"]
    },
    {
      diploma: "HND in Information Technology",
      institution: "Sri Lanka Institute of Advanced Technological Education (SLIATE)",
      period: "2023 - 2026",
      description: "Currently pursuing Higher National Diploma in IT",
      icon: FaUniversity,
      color: "from-blue-500 to-cyan-500"
    },
    {
      exam: "G.C.E. Advanced Level",
      institution: "Kirillawala National Collage - kadawatha",
      period: "2022",
      description: "ICT, Science for Technology, Bio Technology",
      icon: FaSchool,
      color: "from-green-500 to-emerald-500",
      details: ["ICT - C", "Science for Technology - C", "Bio Technology - S"]
    },
    {
      exam: "G.C.E. Ordinary Level",
      institution: "Wedamulla maha vidyalaya - kelaniya",
      period: "2017",
      description: "Achieved 2As, 1B, 3C and 3S",
      icon: FaSchool,
      color: "from-orange-500 to-red-500",
      details: ["2 A's", "1 B", "3 C", "3 S", "Qualified for Advanced Level"]
    }
  ];

  const experience = [
    {
      title: "Backend Developer Intern",
      company: "SLT Head Office - Colombo",
      period: "Sep 16, 2025 - Mar 16, 2026",
      duration: "6 months",
      description: "Worked on DoctorApp module of eChanneling project",
      technologies: ["Node.js", "PostgreSQL", "Express.js", "REST APIs"],
      achievements: [
        "Developed backend services for DoctorApp module",
        "Implemented database schemas and optimized queries",
        "Collaborated with frontend team for API integration",
        "Participated in code reviews and agile ceremonies"
      ],
      icon: FaBriefcase,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  // Simple server-side fallback
  if (!mounted) {
    return (
      <section id="about" className="py-20 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="h-4 bg-white/10 rounded w-3/4 mb-4 animate-pulse" />
              <div className="h-3 bg-white/10 rounded w-full mb-2 animate-pulse" />
              <div className="h-3 bg-white/10 rounded w-full mb-2 animate-pulse" />
              <div className="h-3 bg-white/10 rounded w-2/3 animate-pulse" />
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="h-4 bg-white/10 rounded w-1/2 mb-4 animate-pulse" />
              <div className="h-3 bg-white/10 rounded w-full mb-2 animate-pulse" />
              <div className="h-3 bg-white/10 rounded w-full mb-2 animate-pulse" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <motion.section
      ref={ref}
      id="about"
      className="py-20 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent pointer-events-none" />
      
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-4"
          >
            <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-sm text-indigo-300">Get to know me</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
          
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Let me introduce myself and share my journey in the world of web development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* LEFT COLUMN - Personal Info & Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Who Am I */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <FaLaptopCode className="text-indigo-400" />
                Who am I?
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm a passionate <span className="text-indigo-400 font-semibold">Full Stack Developer</span> from Sri Lanka 🇱🇰 
                with 6 months of professional experience in backend development. 
                I specialize in the <span className="text-purple-400 font-semibold">MERN stack</span> and love creating 
                seamless digital experiences that solve real-world problems.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Currently pursuing my HND in IT and planning to continue my education with a 
                BSc (Hons) Top-up degree. My journey in tech started with a curiosity about 
                how websites work, and that curiosity has evolved into a career dedicated to 
                crafting beautiful, functional, and user-centric applications.
              </p>
            </div>

            {/* Counter Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: yearsOfExperience, label: "Years Experience", suffix: "+", icon: FaAward },
                { value: projectsCompleted, label: "Projects Done", suffix: "+", icon: FaCode },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10 hover:border-indigo-500/50 transition-all duration-300"
                >
                  <stat.icon className="text-2xl text-indigo-400 mx-auto mb-2" />
                  <div className="text-2xl md:text-3xl font-bold text-white">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Education Section */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FaGraduationCap className="text-purple-400" />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-4 border-l-2 border-indigo-500/30 hover:border-indigo-500 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${edu.color} flex items-center justify-center flex-shrink-0 mt-1`}>
                        <edu.icon className="text-white text-sm" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                          <h4 className="font-semibold text-white">{edu.degree}</h4>
                          <span className="text-xs text-gray-500 flex items-center gap-1">
                            <FaCalendarAlt className="text-[10px]" />
                            {edu.period}
                          </span>
                        </div>
                        <p className="text-sm text-gray-400 mb-2">{edu.institution}</p>
                        <p className="text-xs text-gray-500">{edu.description}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {(edu.details || []).map((detail, i) => (
                            <span key={i} className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-400">
                              {detail}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN - Experience & Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Professional Experience */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <FaBriefcase className="text-indigo-400" />
                Professional Experience
              </h3>
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${exp.color} flex items-center justify-center flex-shrink-0`}>
                      <exp.icon className="text-white text-lg" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap justify-between items-start gap-2">
                        <div>
                          <h4 className="font-semibold text-white">{exp.title}</h4>
                          <p className="text-sm text-indigo-400">{exp.company}</p>
                        </div>
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <FaCalendarAlt className="text-[10px]" />
                          {exp.period}
                        </span>
                      </div>
                      <span className="inline-block text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400 mt-2">
                        {exp.duration}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-3 ml-13">
                    {exp.description}
                  </p>
                  
                  <div className="mb-3 ml-13">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="text-xs px-2 py-1 rounded-full bg-indigo-500/20 text-indigo-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-xs text-gray-400 flex items-start gap-2">
                          <span className="text-indigo-400 mt-0.5">▹</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Technical Proficiency */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-4">Technical Proficiency</h3>
              <div className="space-y-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <tech.icon className="text-lg" style={{ color: tech.color }} />
                        <span className="text-sm font-medium text-gray-300">{tech.name}</span>
                      </div>
                      <span className="text-sm text-gray-400">{tech.level}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="group relative overflow-hidden rounded-xl p-4 bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-all duration-300"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  <feature.icon className="text-3xl text-indigo-400 mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                  <p className="text-xs text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl p-6 border border-indigo-500/20"
            >
              <div className="absolute top-4 left-4 text-4xl text-indigo-500/20">"</div>
              <p className="text-gray-300 italic text-center px-4 relative z-10">
                I believe in writing clean, maintainable code and continuously learning 
                new technologies to build better solutions.
              </p>
              <div className="absolute bottom-4 right-4 text-4xl text-purple-500/20">"</div>
            </motion.div>

            {/* Call to Action */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
            >
              Let's Work Together
              <FaRocket className="text-sm" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}