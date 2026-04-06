"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { 
  FaGithub, 
  FaHeart,
} from "react-icons/fa";
import { 
  SiMongodb, 
  SiExpress, 
  SiReact, 
  SiNodedotjs, 
  SiTailwindcss, 
  SiStripe,
  SiSocketdotio,
} from "react-icons/si";
import { DiCss3, DiHtml5 } from "react-icons/di";
import { TbBrandFlutter } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "DJ Client Web Application",
    description: "A comprehensive booking platform for DJs and event organizers with real-time availability, secure payments, and automated scheduling.",
    longDescription: "This full-stack MERN application allows DJs to manage their calendar, set pricing, and receive bookings. Clients can browse DJs by genre, location, and price range, book sessions, and make secure payments.",
    image: "/projects/dj-booking.jpg",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Stripe", "Socket.io"],
    icons: [SiMongodb, SiExpress, SiReact, SiNodedotjs, SiStripe],
    github: "https://github.com/sakunirajapaksha/DJ_CLIENT_WEB_APPLICATION.git",
    features: [
      "Real-time availability calendar",
      "Secure payment processing",
      "Automated email notifications",
      "DJ portfolio management",
      "Review and rating system"
    ],
    category: "fullstack",
    emoji: "🎧",
    bgColor: "from-purple-500/20 to-pink-500/20"
  },
  {
    id: 2,
    title: "Seat Reservation Web Application",
    description: "Modern seat reservation system for events, cinemas, and transportation with real-time seat selection and booking management.",
    longDescription: "A complete MERN-based reservation platform featuring interactive seat maps, real-time availability, user authentication, and booking history.",
    image: "/projects/seat-reservation.jpg",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Socket.io"],
    icons: [SiMongodb, SiExpress, SiReact, SiNodedotjs],
    github: "https://github.com/sakunirajapaksha/Seat_Resevation_System.git",
    features: [
      "Interactive seat selection",
      "Real-time availability updates",
      "User authentication & profiles",
      "Booking history & management",
      "Email confirmation"
    ],
    category: "fullstack",
    emoji: "💺",
    bgColor: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: 3,
    title: "AI Chatbot Assistant",
    description: "An intelligent AI chatbot that answers questions, provides recommendations, and engages in natural conversations.",
    longDescription: "A simple yet powerful AI chatbot built with React and integrated with OpenAI's GPT API. Features include conversation history, typing indicators, and customizable responses.",
    image: "/projects/ai-chatbot.jpg",
    tech: ["React.js", "Node.js", "OpenAI API", "Express.js", "Socket.io"],
    icons: [SiReact, SiNodedotjs, SiExpress],
    github: "https://github.com/sakunirajapaksha/AI_Chatboat.git",
    features: [
      "Natural language processing",
      "Conversation history",
      "Typing indicators",
      "Customizable responses",
      "Multi-turn conversations"
    ],
    category: "ai",
    emoji: "🤖",
    bgColor: "from-green-500/20 to-emerald-500/20"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website with smooth animations, dark mode, and optimized performance.",
    longDescription: "A stunning personal portfolio showcasing skills, projects, and experience with interactive elements, animations, and a contact form.",
    image: "/projects/portfolio.jpg",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Email.js"],
    icons: [SiReact, SiTailwindcss],
    github: "https://github.com/sakunirajapaksha/portfolio.git",
    features: [
      "Responsive design",
      "Dark/Light mode",
      "Smooth animations",
      "Contact form",
      "SEO optimized"
    ],
    category: "frontend",
    emoji: "💼",
    bgColor: "from-orange-500/20 to-red-500/20"
  },
  {
    id: 5,
    title: "Cafe Website",
    description: "Beautiful and responsive cafe website showcasing menu, services, and contact information.",
    longDescription: "A modern cafe website built with HTML5 and CSS3 featuring an elegant design, responsive layout, and interactive menu display.",
    image: "/projects/cafe-website.jpg",
    tech: ["HTML5", "CSS3", "JavaScript"],
    icons: [DiHtml5, DiCss3, IoLogoJavascript],
    github: "https://github.com/sakunirajapaksha/Cafewebsite.git",
    features: [
      "Responsive design",
      "Interactive menu",
      "Contact form",
      "Location map",
      "Gallery section"
    ],
    category: "frontend",
    emoji: "☕",
    bgColor: "from-yellow-500/20 to-amber-500/20"
  },
  {
    id: 6,
    title: "Task Manager App",
    description: "Cross-platform task management application with drag-and-drop, reminders, and team collaboration.",
    longDescription: "A Flutter-based task management app featuring task creation, categories, due dates, reminders, and synchronization across devices.",
    image: "/projects/task-manager.jpg",
    tech: ["Flutter", "Dart", "SQLite", "Firebase"],
    icons: [TbBrandFlutter],
    github: "https://github.com/sakunirajapaksha/task_app.git",
    features: [
      "Task creation & management",
      "Drag-and-drop interface",
      "Push notifications",
      "Cloud synchronization",
      "Dark mode support"
    ],
    category: "frontend",
    emoji: "✅",
    bgColor: "from-indigo-500/20 to-purple-500/20"
  }
];

export default function Projects() {
  const ref = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [filter, setFilter] = useState("all");
  const [likedProjects, setLikedProjects] = useState({});
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Ensure component is mounted before animations
  useEffect(() => {
    setMounted(true);
  }, []);

  const categories = [
    { id: "all", name: "All Projects", count: projects.length },
    { id: "fullstack", name: "Full Stack", count: projects.filter(p => p.category === "fullstack").length },
    { id: "frontend", name: "Frontend", count: projects.filter(p => p.category === "frontend").length },
    { id: "ai", name: "AI/ML", count: projects.filter(p => p.category === "ai").length },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  const handleLike = (projectId) => {
    setLikedProjects(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  // Calculate unique technologies count
  const uniqueTechnologies = [...new Set(projects.flatMap(p => p.tech))];

  // Don't render animations on server
  if (!mounted) {
    return (
      <section
        ref={ref}
        id="projects"
        className="py-20 px-4 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project) => (
              <div key={project.id} className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-gray-400 text-sm mt-2">{project.description}</p>
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
      id="projects"
      className="py-20 px-4 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
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
            <span className="text-sm text-indigo-300">My Work</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
          
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Here are some of my best works. Each project is a unique challenge that helped me grow as a developer.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category.id)}
              className={`relative px-6 py-2 rounded-full transition-all duration-300 ${
                filter === category.id
                  ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/25"
                  : "bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10"
              }`}
            >
              <span className="text-sm font-medium">{category.name}</span>
              <span className={`ml-2 text-xs ${
                filter === category.id ? "text-white/80" : "text-gray-500"
              }`}>
                ({category.count})
              </span>
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-indigo-500/50 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-indigo-500/20 to-purple-500/20">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    const parent = e.target.parentElement;
                    if (parent) {
                      parent.classList.add('flex', 'items-center', 'justify-center');
                      const emojiDiv = document.createElement('div');
                      emojiDiv.className = 'text-7xl';
                      emojiDiv.textContent = project.emoji;
                      parent.appendChild(emojiDiv);
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-1">
                    {project.icons.slice(0, 3).map((Icon, i) => (
                      <div key={i} className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                        <Icon className="text-xs" />
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded-full bg-indigo-500/20 text-indigo-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 text-xs rounded-full bg-white/10 text-gray-400">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.features.slice(0, 2).map((feature, i) => (
                      <span key={i} className="text-xs text-gray-500">
                        • {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all"
                  >
                    <FaGithub />
                    View Code
                  </motion.a>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleLike(project.id)}
                    className="flex items-center justify-center px-3 py-2 rounded-lg border border-white/20 text-gray-300 hover:text-red-400 hover:border-red-400/50 transition-all"
                  >
                    <FaHeart className={likedProjects[project.id] ? "text-red-500 fill-red-500" : ""} />
                  </motion.button>
                </div>
              </div>

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" style={{ padding: '1px' }} />
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open("https://github.com/sakunirajapaksha", "_blank")}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all"
          >
            <FaGithub />
            View More on GitHub
          </motion.button>
        </div>

        {/* Project Stats Summary */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Total Projects", value: projects.length, suffix: "" },
            { label: "Technologies Used", value: uniqueTechnologies.length, suffix: "+" },
            { label: "GitHub Repos", value: projects.length, suffix: "" },
            { label: "Categories", value: categories.filter(c => c.id !== "all").length, suffix: "" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="text-center p-4 rounded-xl bg-white/5 border border-white/10"
            >
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}