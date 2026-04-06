"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  FaGithub, 
  FaLinkedin, 
  FaHeart,
  FaArrowUp,
  FaEnvelope,
  FaLaptopCode,
  FaRocket
} from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [mounted, setMounted] = useState(false);
  const currentYear = new Date().getFullYear();

  // Ensure component is mounted before any client-side rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // Add newsletter subscription logic here
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: FaGithub, name: "GitHub", url: "https://github.com/sakunirajapaksha", color: "#333" },
    { icon: FaLinkedin, name: "LinkedIn", url: "https://www.linkedin.com/in/sakuni-rajapaksha-964a29264", color: "#0077B5" },
    { icon: FaEnvelope, name: "Email", url: "mailto:sakunirajapaksha007@gmail.com", color: "#EA4335" },
  ];

  const services = [
    "Web Development",
    "UI/UX Design",
    "API Integration"
  ];

  // Don't render animated content on server
  if (!mounted) {
    return (
      <footer className="relative bg-gradient-to-b from-transparent to-black/50 border-t border-white/10">
        <div className="relative max-w-6xl mx-auto px-4 py-12">
          <div className="text-center">
            <p className="text-gray-400">Loading...</p>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="relative bg-gradient-to-b from-transparent to-black/50 border-t border-white/10">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none" />
      
      <div className="relative max-w-6xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section with Photo Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              {/* Profile Photo as Logo */}
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-indigo-500/50 transition-all duration-300">
                <Image
                  src="/logo.jpg"
                  alt="Sakuni Logo"
                  fill
                  className="object-cover"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    const imgElement = e.currentTarget;
                    const parent = imgElement.parentElement;
                    if (parent) {
                      imgElement.style.display = 'none';
                      parent.classList.add('bg-gradient-to-r', 'from-indigo-500', 'to-purple-500', 'flex', 'items-center', 'justify-center');
                      // Remove existing content and add letter S
                      const span = document.createElement('span');
                      span.className = 'text-white text-xl font-bold';
                      span.textContent = 'S';
                      parent.appendChild(span);
                    }
                  }}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Sakuni
                </h3>
                <p className="text-xs text-gray-500">Full Stack Developer</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full Stack Developer passionate about building amazing web experiences 
              that solve real-world problems.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <social.icon 
                    className="text-sm text-gray-400 group-hover:text-white transition-colors" 
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-white font-semibold text-lg relative inline-block">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="transition-all"
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-indigo-400 text-sm transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-indigo-400" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-white font-semibold text-lg relative inline-block">
              Services
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
            </h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="text-gray-400 text-sm transition-colors duration-300 flex items-center gap-2"
                >
                  <FaLaptopCode className="text-xs text-purple-400" />
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-white font-semibold text-lg relative inline-block">
              Newsletter
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full" />
            </h4>
            <p className="text-gray-400 text-sm">
              Get updates about my latest projects and articles.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-4 py-2 pr-12 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 outline-none text-white text-sm transition-all"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 rounded-md bg-purple-500/20 hover:bg-purple-500/40 transition-colors"
                >
                  <FaRocket className="text-purple-400 text-xs" />
                </button>
              </div>
              {subscribed && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-xs"
                >
                  Thanks for subscribing! 🎉
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-gray-400 text-sm"
          >
            <span>© {currentYear} Sakuni Rajapaksha.</span>
            <span>All rights reserved.</span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1">
              Made with <FaHeart className="text-red-400 text-xs animate-pulse" /> in Sri Lanka
            </span>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex gap-6 text-xs text-gray-500"
          >
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span>Available for work</span>
            </div>
            <div className="flex items-center gap-1">
              <FaLaptopCode className="text-indigo-400 text-xs" />
              <span>3+ Projects</span>
            </div>
          </motion.div>

          {/* Back to Top Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 group"
          >
            <FaArrowUp className="text-indigo-400 text-sm group-hover:-translate-y-1 transition-transform" />
            <span className="text-sm text-gray-300">Back to Top</span>
          </motion.button>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-xs text-gray-600"
        >
          <p>
            Built with <span className="text-red-400">❤️</span> using Next.js, 
            Tailwind CSS, and Framer Motion. Deployed on Vercel.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}